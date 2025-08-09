Interceptor.attach(Module.findExportByName("libart.so", "_ZN3art3JNI14CallObjectMethodEPNS_9JNIEnvExtEP8_jobjectP10_jmethodIDz"), {
    onEnter: function (args) {
        var methodID = args[2];
        
        // 获取方法名称
        var methodName = Java.vm.tryGetEnv().getJavaMethodName(methodID);
        if (methodName && methodName.indexOf("getPackageInfo") !== -1) {
            console.log("[*] Called getPackageInfo from JNI layer");
            console.log("[*] Args[0] (package name): " + args[1].readUtf8String());
        }
    },
    onLeave: function (retval) {
        // 返回值是 JNI 函数调用结果
        console.log("[*] getPackageInfo result: " + retval);
    }
});
