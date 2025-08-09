var moduleName = "libiam.so";
var funcOffset = 0x3b97c;     //   b6b88; // 偏移11
//第二种方式（针对新系统版本） android 8.1 使用该方法
var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
console.log(android_dlopen_ext);
if(android_dlopen_ext != null){
    Interceptor.attach(android_dlopen_ext,{
        onEnter: function(args){
            var soName = args[0].readCString();
            //console.log(soName);
            if(soName.indexOf(moduleName) != -1){
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



function dlopentodo(){

var baseAddr = Module.findBaseAddress(moduleName);
if (baseAddr === null) {
    console.log("模块未加载: " + moduleName);
} else {
    var funcAddr = baseAddr.add(funcOffset);
    console.log("函数地址: " + funcAddr);
    var hook = 0;
Interceptor.attach(funcAddr, {
    
    onEnter: function (args) {
    
        // args[2] 是 v258 的地址
        this.v258_ptr = args[2];
        var name = Memory.readUtf8String(args[4])
        if(name.indexOf("tigrik")!= -1){
            hook = 1
        console.log("arg0 (a1):", args[0]);
        console.log("arg1 (a2):", args[1]);
        console.log("arg2 (a3):", args[2]);
        console.log("arg3 (a4):", args[3].toInt32());
        console.log("arg4 (a5):", Memory.readUtf8String(args[4]));
        console.log("arg5 (a6):", Memory.readUtf8String(args[5]));
        console.log("arg6 (a7):", Memory.readUtf8String(args[6]));
        console.log("[+] v258 address:", this.v258_ptr);
        }else{
            hook = 0;
        }
    },
    onLeave: function (retval) {

        if(hook){
        var v258_val = Memory.readCString(this.v258_ptr);
        var v258 = Memory.readPointer(this.v258_ptr);
        
        console.log("sub_3B97C returned:", retval);
        console.log("[+] v258 value after call:", v258_val);
       // Memory.writePointer(this.v258_ptr, ptr("0x0"));
        }
    }
});
}
}

