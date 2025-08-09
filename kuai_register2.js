    var libName = "libnativehook.so";

var base = Module.findExportByName(libName, "_ZN7_JNIEnv15RegisterNativesEP7_jclassPK15JNINativeMethodi")
console.log(base)
hook_RegisterNatives(base)

function hook_RegisterNatives(addrRegisterNatives) {

    if (addrRegisterNatives != null) {

        Interceptor.attach(addrRegisterNatives, {
                  //  console.log(addrRegisterNatives)
            onEnter: function (args) {
                console.log("[RegisterNatives] method_count:", args);
                let java_class = args[1];
                let class_name = Java.vm.tryGetEnv().getClassName(java_class);
                //console.log(class_name);

                let methods_ptr = ptr(args[2]);

                let method_count = parseInt(args[3]);
                for (let i = 0; i < method_count; i++) {
                    let name_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3));
                    let sig_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize));
                    let fnPtr_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2));

                    let name = Memory.readCString(name_ptr);
                    let sig = Memory.readCString(sig_ptr);
                    let symbol = DebugSymbol.fromAddress(fnPtr_ptr)
                    console.log("[RegisterNatives] java_class:", class_name, "name:", name, "sig:", sig, "fnPtr:", fnPtr_ptr,  " fnOffset:", symbol, " callee:", DebugSymbol.fromAddress(this.returnAddress));
                }
            }
        });
    }
}


// Java.perform(function () {
//     // 指定目标 so 文件名（可以模糊匹配）
//     var libName = "libnativehook.so";

//     var module = Process.getModuleByName(libName);
//     console.log(">>> 模块名:", module.name);
//     console.log(">>> 模块基址:", module.base);
//     console.log(">>> 模块大小:", module.size);

//     var exports = Module.enumerateExports(libName);
//     console.log(">>> 共导出函数数量:", exports.length);

//     for (var i = 0; i < exports.length; i++) {
//         var exp = exports[i];
//         if (exp.type === 'function') {
//             console.log("[" + i + "] " + exp.name + " @ " + exp.address);
//         }
//     }
// });

