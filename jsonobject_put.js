
console.log("start");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {
var JSONObject = Java.use("org.json.JSONObject");
    

    
// Hook put 方法
JSONObject.put.overload('java.lang.String', 'java.lang.Object').implementation = function (key, value) {
    console.log("JSONObject put: key = " + key + ", value = " + value);
    return this.put(key, value);  // 调用原始方法
};
});
