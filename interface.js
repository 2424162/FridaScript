Java.perform(function () {
    var targetInterface = "okhttp3.Interceptor";

    Java.enumerateLoadedClasses({
        onMatch: function (className) {
            try {
                var clazz = Java.use(className);

                // 检查是否实现了该接口
                if (clazz.class && clazz.class.getInterfaces) {
                    var interfaces = clazz.class.getInterfaces();
                    for (var i = 0; i < interfaces.length; i++) {
                        var intfName = interfaces[i].getName();
                        if (intfName === targetInterface) {
                            console.log("[*] Found implementation: " + className);

                            // Hook doSomething 方法（参数根据实际情况调整）
                            try {
                                clazz.doSomething.overload('java.lang.String').implementation = function (arg) {
                                    console.log(">> Hooked " + className + ".doSomething with arg: " + arg);
                                    return this.doSomething(arg);
                                };
                            } catch (hookErr) {
                                console.error("[-] Failed to hook: " + className + ".doSomething: " + hookErr);
                            }
                        }
                    }
                }
            } catch (err) {
                // 忽略非 Java 类或其他错误
            }
        },
        onComplete: function () {
            console.log("[*] Interface hook completed.");
        }
    });
});
