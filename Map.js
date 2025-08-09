console.log("start")

        // 获取 Activity 类
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {

    let Map = Java.use("java.util.Map");
    Map.put.implementation = function (key, value) {
        // 打印调用信息
        console.log("Map.put called with key: " + key + ", value: " + value);
        
        // 调用原始的 put 方法
        var result = this.put(key, value);

        
        // 打印返回值
        console.log("HashMap.put returned: " + result);
        
        // 返回原始方法的返回值
        return result;
    };

});
