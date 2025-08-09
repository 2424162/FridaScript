function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {
    // var StringBuilder = Java.use("java.lang.StringBuilder");
    // // Hook append 方法
    // StringBuilder.append.overload('java.lang.String').implementation = function (str) {
    //     console.log("StringBuilder append: " + str);
    //     return this.append(str);  // 调用原始方法
    // };

    // Hook toString 方法
    // StringBuilder.toString.implementation = function () {
    //     var result = this.toString();
    //     console.log("StringBuilder toString: " + result);
    //     return result;
    // };
    var JSONArray = Java.use("org.json.JSONArray");


    // Hook put 方法
    JSONArray.put.overload('java.lang.Object').implementation = function (value) {
        console.log("JSONArray put: value = " + value);
        return this.put(value);  // 调用原始方法
    };

    // Hook get 方法
    JSONArray.get.overload('int').implementation = function (index) {
        var value = this.get(index);
        console.log("JSONArray get: index = " + index + ", value = " + value);
        return value;
    };

    var JSONObject = Java.use("org.json.JSONObject");
    

    
    // Hook put 方法
    JSONObject.put.overload('java.lang.String', 'java.lang.Object').implementation = function (key, value) {
        console.log("JSONObject put: key = " + key + ", value = " + value);
        return this.put(key, value);  // 调用原始方法
    };

    // Hook get 方法
    JSONObject.get.overload('java.lang.String').implementation = function (key) {
        var value = this.get(key);
        console.log("JSONObject get: key = " + key + ", value = " + value);
        return value;
    };

    var ArrayList = Java.use("java.util.ArrayList");
    


    // Hook add 方法
    ArrayList.add.overload( 'java.lang.Object').implementation = function (element) {
        
        showStacks()
        console.log("Element added: " + element);
        return this.add(element);  // 调用原始方法
    };

    var  BufferedReader= Java.use("java.io.BufferedReader")
    BufferedReader.readLine.overload('boolean').implementation = function (element) {
        var re = this.readLine(element);
        showStacks()
        console.log("readLine added: " + re);
        return  re // 调用原始方法
    };
    BufferedReader.readLine.overload().implementation = function () {
        var re = this.readLine();
        showStacks()
        console.log("readLine 2added: " + re);
        return  re // 调用原始方法
    };


});