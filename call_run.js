Java.perform(function () {


    let d = Java.use("com.fpm.vzf.d");
    var dobj = d.$new("b0863ff2ae2911ef800c1070fda5114c")

   var f = Java.use("com.fpm.vzf.f");
   var res = f.a(dobj,10,10)
    console.log(dobj)
    console.log(res)


d["run"].implementation = function () {
    console.log(`d.run is called`);
    this["run"]();
};

let i = Java.use("com.fpm.vzf.i");
i["a"].overload().implementation = function () {
    console.log(`i.getSPlasttime_a is called`);
    let result = this["a"]();
    let result2 = result - 77140000;
    console.log(`i.getSPlasttime_a result=${result}`);
    return result2;
};

let b = Java.use("com.fpm.vzf.b");
b["a"].overload('java.lang.String').implementation = function (str) {
    console.log(`b.a is called: str=${str}`);
    let result = this["a"](str);
    console.log(`b.a result=${result}`);
    return result;
};



let g = Java.use("com.fpm.vzf.a.g");
g["a"].overload('java.lang.String', '[B', 'java.lang.String').implementation = function (str, bArr, str2) {
    console.log(`g.a is called: str=${str}, bArr=${bArr}, str2=${str2}`);
    let result = this["a"](str, bArr, str2);
    console.log(`g.a result=${result}`);
    return result;
};

//网络状态
g["a"].overload('android.content.Context').implementation = function (context) {
    console.log(`g.a is called: context=${context}`);
    let result = this["a"](context);
    console.log(`网络好不 g.a result=${result}`);
    return false;
};

    var URL = Java.use("java.net.URL");

    // hook 无参数的 openConnection()
    URL.openConnection.overload().implementation = function () {
        console.log("[*] URL.openConnection() called");
        console.log("    URL: " + this.toString());  // 打印 URL 本身

        var result = this.openConnection();  // 调用原始方法

        console.log("    Return: " + result);  // 打印返回值类型（通常是 HttpURLConnection）
        return result;
    };

    // hook 带 Proxy 参数的 openConnection(Proxy proxy)
    URL.openConnection.overload("java.net.Proxy").implementation = function (proxy) {
        console.log("[*] URL.openConnection(Proxy) called");
        console.log("    URL: " + this.toString());
        console.log("    Proxy: " + proxy);

        var result = this.openConnection(proxy);
        console.log("    Return: " + result);
        return result;
    };

    var JSONObject = Java.use("org.json.JSONObject");

    // Hook 无参 toString()
    JSONObject.toString.overload().implementation = function () {
        var result = this.toString();  // 调用原始方法
        console.log("[*] JSONObject.toString() called");
        console.log("    → Result: " + result);
        return result;  // 如需篡改结果可修改这里
    };

    // Hook 带参数 toString(int indentSpaces)
    JSONObject.toString.overload('int').implementation = function (indent) {
        var result = this.toString(indent);
        console.log("[*] JSONObject.toString(indent) called");
        console.log("    → Indent: " + indent);
        console.log("    → Result: " + result);
        return result;
    };

    var StringCls = Java.use("java.lang.String");

    StringCls.$init.overload('[B', 'java.nio.charset.Charset').implementation = function (bArr, charset) {
        var str = this.$init(bArr, charset);
        console.log("[*] new String(byte[], Charset) called");
        console.log("    Charset: " + charset.name());
        console.log("    Result : " + str);
        return str;
    };

g["a"].overload('java.lang.String', '[B', 'java.lang.String').implementation = function (str, bArr, str2) {
    console.log(`g.a is called: str=${str}, bArr=${bArr}, str2=${str2}`);
    let result = this["a"](str, bArr, str2);
    console.log(`网络返回结果g.a result=${result}`);
    return result;
};


let g2 = Java.use("com.fpm.vzf.g");
g2["d"].implementation = function (str) {
    console.log(`日志logg.d is called: str=${str}`);
    this["d"](str);
};

    var HttpURLConnection = Java.use("java.net.HttpURLConnection");

    // Hook `getResponseCode` 方法
    HttpURLConnection.getResponseCode.implementation = function () {
        // 获取返回的状态码
        var responseCode = this.getResponseCode();
        
        console.log("[*] getResponseCode() called");
        console.log("    Response Code: " + responseCode);  // 打印响应代码

        // 可以在此处修改返回值，如果需要的话
        // return 404;  // 模拟返回 404 错误
        
        return responseCode;  // 返回原始的响应代码
    };




});
