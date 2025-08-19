console.log("HOOK");
Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
    onEnter: function(args) {
        var soName = ptr(args[0]).readCString();
        console.log(soName);
        if(soName.includes("libmsaoaidsec.so")) {
            console.log("Blocking:", soName);
            args[0] = ptr(0);
        }
    }
});

function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}


Java.perform(function () {
    // 目标类名
    var targetClass = "okhttp3.RealCall";
    
    // 获取该类的 Java 类引用
    var myClass = Java.use(targetClass);

    // 获取类的所有方法
    var methods = myClass.class.getDeclaredMethods();

    // 遍历所有方法
    methods.forEach(function (method) {
        var methodName = method.getName();
        var methodSignature = method.toString();
        
        console.log("Hooking method: " + methodName + " with signature: " + methodSignature);

        // 使用Interceptor hook每个方法
        myClass[methodName].overload(...getMethodParamTypes(method)).implementation = function () {
            // 打印传递给方法的参数
            console.log("Called " + methodName + " with arguments:");
            for (var i = 0; i < arguments.length; i++) {
                console.log("  arg" + i + ": " + arguments[i]);
            }

            // 调用原始方法并获取返回值
            var result = this[methodName].apply(this, arguments);
            
            // 打印返回值
            console.log("Method " + methodName + " returned: " + result);

            // 返回原始结果
            return result;
        };
    });
});

// 根据方法签名获取参数类型
function getMethodParamTypes(method) {
    var paramTypes = method.getParameterTypes();
    var paramTypeNames = [];
    for (var i = 0; i < paramTypes.length; i++) {
        paramTypeNames.push(paramTypes[i].getName());
    }
    return paramTypeNames;
}


