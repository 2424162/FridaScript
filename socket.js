console.log("kaishi");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}
function hookOverloads(className, func) {
    var clazz = Java.use(className);
    var methodOverloads = clazz[func].overloads;
    for (var i = 0; i < methodOverloads.length; i++) {
        var overload = methodOverloads[i];
        console.log("Overload #" + (i + 1));
        console.log("Signature: " + overload.toString());
        console.log("Parameter types:");
        for (var i = 0; i < methodOverloads.length; i++) {
            var overload = methodOverloads[i];
            
            // Hook 重载方法
            overload.implementation = function() {
                console.log("Hooked overload #" + (i + 1));
                
                // 如果需要，你可以访问传入的参数
                console.log("Arguments: " + JSON.stringify(arguments));
        
                // 可以调用原始方法，传入所有参数
                return overload.apply(this, arguments);
            };
        }
        
        // 打印每个重载方法的参数类型
        for (var j = 0; j < overload.argumentTypes.length; j++) {
            console.log("  Arg " + (j + 1) + ": " + overload.argumentTypes[j]);
        }
    //   if (overloads[i].hasOwnProperty('argumentTypes') || overloads[i]['argumentTypes'] != undefined) {
    //     var parameters = [];
  
    //     var curArgumentTypes = overloads[i].argumentTypes, args = [], argLog = '[';
    //     for (var j in curArgumentTypes) {
    //       var cName = curArgumentTypes[j].className;
    //       parameters.push(cName);
    //       argLog += "'(" + cName + ") ' + v" + j + ",";
    //       args.push('v' + j);
    //     }
    //     argLog += ']';
  
    //     var script = "var ret = this." + func + '(' + args.join(',') + ") || '';\n"
    //       + "console.log(JSON.stringify(" + argLog + "));\n"
    //       + "return ret;"
    //     console.log(script)
    //     args.push(script);
    //     clazz[func].overload.apply(this, parameters).implementation = Function.apply(null, args);
    //   }
    }
  }
  
  Java.perform(function() {
    hookOverloads('java.net.Socket', '$init');
  })