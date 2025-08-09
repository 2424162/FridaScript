
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


function showNativeStacks() {
    console.log('RegisterNatives called from:\n' +
        Thread.backtrace(this.context, Backtracer.ACCURATE)
        .map(DebugSymbol.fromAddress).join('\n') + '\n');
  }


function dlopentodo(){
    //todo ...

// 2. 计算函数真实地址
var baseAddr = Module.findBaseAddress(moduleName);
if (baseAddr === null) {
    console.log("模块未加载: " + moduleName);
} else {
    var funcAddr = baseAddr.add(funcOffset);
    console.log("函数地址: " + funcAddr);

    Interceptor.attach(funcAddr, {
        onEnter: function (args) {
            //return;
            console.log("进入 native 函数");
            // console.log(Thread.backtrace(this.context, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join("\n"));
        

            // 根据签名 (Ljava/lang/Object;)Ljava/lang/Object;
            // 第一个参数是 jobject，在 ARM64 或 x86_64 的约定下，传递在 args[0]

            const srcStr = Memory.readCString(args[4]); 
            const srcStr2 = Memory.readCString(args[5]); 
            console.log("参数 args[0]: " + args[0],srcStr,srcStr2);

            // 如果需要，可以把 args[0] 转换成 Java 对象
            // var obj = Java.vm.tryGetEnv().getObject(args[0]);
            // if (obj !== null) {
            //     console.log("Java 对象参数: " + obj.toString());
            // } else {
            //     console.log("无法转换参数为 Java 对象");
            // }
            
            if (srcStr2.indexOf("digest")!= -1){
                        var newStr = "digest";
        console.log("[*] 修改后的字符串: ", newStr);

        // 将新的字符串地址写入原来的参数位置
        args[5] = Memory.allocUtf8String(newStr);
                
            }
        },
        onLeave: function (retval) {

            //retval.replace(0x119);
            console.log("函数返回值: " + retval);
            // 如果返回值是 jobject，也可以转换
            // var retObj = Java.vm.tryGetEnv().getObject(retval);
            // if (retObj !== null) {
            //     console.log("返回 Java 对象: " + retObj.toString());
            // }
        }
    });
}
}

