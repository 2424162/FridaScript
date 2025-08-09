Java.perform(function () {
    var target_class = "com.appcoins.sdk.core.logger.Logger";

        Java.enumerateClassLoaders({
        onMatch: function (loader) {
            try {
                if (loader.findClass(target_class)) {
                    console.log("[+] 找到类 " + target_class + " 的 ClassLoader: " + loader);
                }
            } catch (e) {}
        },
        onComplete: function () {
            console.log("搜索完毕");
        }
    });


});
