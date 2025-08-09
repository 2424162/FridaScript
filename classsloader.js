
Java.perform(function() {
    var targetLoader = Java.enumerateClassLoadersSync().find(loader => {
        try {
            return loader.findClass("com.fpm.vzf.Nfwq");
        } catch (e) {
            return false;
        }
    });

    if (targetLoader) {
        console.log("Using target ClassLoader: " + targetLoader);
        var MyClass = Java.ClassFactory.get(targetLoader).use("com.fpm.vzf.Nfwq");
        console.log("class====",MyClass);
        MyClass.d.implementation = function(a,b,c) {
            console.log("Hooked o 方法",a); 
            return this.d(a,b,c);
        };
    } else {
        console.log("No suitable ClassLoader found!");
    }
});
