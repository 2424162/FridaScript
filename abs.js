console.log("start")
Java.perform(function () {
    var classes = Java.enumerateLoadedClassesSync();
    for (const index in classes) {
        var className = classes[index];
       // console.log(className)
       // if(className.indexOf("Qn1.d") === -1) continue;
        var clazz = Java.use(className);
        var resultClass = clazz.class.getSuperclass();
        if(resultClass == null) continue;
        if(resultClass.toString().indexOf("Qn1.d") !== -1){
            console.log(className, resultClass);
        }
    }
});