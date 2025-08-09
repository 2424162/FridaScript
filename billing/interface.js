
console.log("kaishi");
Java.perform(function () {
    var interfaceName = "com.ssjj.fnsdk.core.SsjjFNListener";
    var targetInterface = Java.use(interfaceName);

    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            try {
                console.log(className)
                var clazz = Java.use(className);

                // 判断是否是接口的实现类（跳过接口本身）
                if (className !== interfaceName && targetInterface.class.isAssignableFrom(clazz.class)) {
                    console.log("[+] Found implementation: " + className);

                    // Hook pay(String) 方法（你可以根据接口定义改）
                    try {
                        clazz.pay.onCallback.implementation = function (orderId) {
                            console.log(`[+] Hooked ${className}.pay(): orderId = ${orderId}`);
                            return this.onCallback(orderId);  // 原始调用
                        };
                    } catch (e) {
                        console.log(`[-] ${className} 没有 pay(String) 方法或签名不同`);
                    }
                }
            } catch (e) {
                // 某些类可能不能 attach
            }
        },
        onComplete: function () {
            console.log("[*] Interface scan complete.");
        }
    });
});
