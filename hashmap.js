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


console.log("start");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {
    // 获取 HashMap 类
    var HashMap = Java.use("java.util.HashMap");

    // Hook HashMap 的 put 方法
    HashMap.put.implementation = function (key, value) {
        // 打印调用信息
        console.log("HashMap.put called with key: " + key + ", value: " + value);
        
        // 调用原始的 put 方法
        var result = this.put(key, value);
        if(key=="shield"){
            showStacks()
        }
        
        // 打印返回值
      //  console.log("HashMap.put returned: " + result);
        
        // 返回原始方法的返回值
        return result;
    };

    // Hook HashMap 的 get 方法
    // HashMap.get.implementation = function (key) {
    //     // 打印调用信息
    //     console.log("HashMap.get called with key: " + key);
        
    //     // 调用原始的 get 方法
    //     var result = this.get(key);
    //     if(typeof result.length == "function" && result.length>=19700){
    //         showStacks()
    //     }
        
    //     // 打印返回值
    //     console.log("HashMap.get returned: " + result);
        
    //     // 返回原始方法的返回值
    //     return result;
    // };

    var ArrayList = Java.use("java.util.ArrayList");
    


    // Hook add 方法
    ArrayList.add.overload( 'java.lang.Object').implementation = function (element) {
        
        // showStacks()
       //  console.log("Element added: " + element);
        return this.add(element);  // 调用原始方法
    };

    var  BufferedReader= Java.use("java.io.BufferedReader")
    BufferedReader.readLine.overload('boolean').implementation = function (element) {
        var re = this.readLine(element);
      //  showStacks()
      //  console.log("readLine added: " + re);
        return  re // 调用原始方法
    };
    BufferedReader.readLine.overload().implementation = function () {
        var re = this.readLine();
    //    showStacks()
    //    console.log("readLine 2added: " + re);
        return  re // 调用原始方法
    };
});