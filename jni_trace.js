var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
console.log(android_dlopen_ext);
if(android_dlopen_ext != null){
    Interceptor.attach(android_dlopen_ext,{
        onEnter: function(args){
            var soName = args[0].readCString();
            console.log(soName);
            if(soName.indexOf("libnativehook.so") != -1){
                this.hook = true;
            }
        },
        onLeave: function(retval){
            if(this.hook) {
                dlopentodo();
            };
        }
    });
}


function get_diff_regs(context, pre_regs) {
    var diff_regs = {};
    // console.log(Object.keys(JSON.parse(JSON.stringify(context))));
    for (const [reg_name, reg_value] of Object.entries(JSON.parse(JSON.stringify(context)))) {
        if (reg_name != "pc" && pre_regs[reg_name] !== reg_value) {
            pre_regs[reg_name] = reg_value;
            diff_regs[reg_name] = reg_value;
        }
    }
    return diff_regs;
}


function dlopentodo(){
    hookJNIOnLoad()
}

function hookJNIOnLoad() {
    var module = Module.load("libnativehook.so");
    var baseAddr = module.base;
    var module_start = module.base;
    var module_end = baseAddr + module.size;
    console.log(module.size)
    console.log("jni_onload:"+baseAddr+" = "+module )
    var pre_regs = {}
    var jniOnLoadPtr = Module.findExportByName("libnativehook.so", "JNI_OnLoad");
    if (jniOnLoadPtr !== null) {
        Interceptor.attach(jniOnLoadPtr, {
            onEnter: function (args) {
                
                console.log("JNI_OnLoad called!");
                this.stalker = Stalker.follow({
                    events: {
                        call: true,    // 追踪调用指令

                    },

                    transform(iterator) {
                        let instruction = iterator.next();
                        do {
                            const startAddress = instruction.address;
                           // console.log(startAddress,"==",module_start )
                            const is_module_code = startAddress.compare(module_start) >= 0 
                            && startAddress.compare(module_end) === -1;
                            if (is_module_code) {
                             //    console.log(startAddress, instruction);

                                // iterator.putCallout(function (context) {
                                //     var pc = context.pc;
                                //     var module = Process.findModuleByAddress(pc);
                                //     if (module) {
                                //         var diff_regs = get_diff_regs(context, pre_regs);
    
                                //         console.log(module.name + "!" + ptr(pc).sub(module.base), 
                                //             Instruction.parse(ptr(pc)),
                                //             JSON.stringify(diff_regs));
                                //     }
                                    
                                // });
                            }
    
                            iterator.keep();
                        } while ((instruction = iterator.next()) !== null);
                    }
                });
            },
            onLeave: function(retral){
                console.log("退出函数");
                Stalker.unfollow(this.stalker);
                Stalker.flush();
            }
        });
    } else {
        console.error("Cannot find JNI_OnLoad in libtarget.so");


    }
}

function onInstruction(context) {
    console.log(`Instruction at PC: ${context.pc}`);
//     console.log(`X0: ${context.x0}`); // 打印 x0 寄存器值
//     console.log(`X1: ${context.x1}`); // 打印 x1 寄存器值
//     console.log(`SP: ${context.sp}`); // 打印栈指针
//     console.log("---");
 }