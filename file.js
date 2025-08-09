Java.perform(function () {
    var File = Java.use("java.io.File");

    // Hook 构造函数 File(String, String)
    File.$init.overload('java.lang.String', 'java.lang.String').implementation = function (parent, child) {
        var path = parent + "/" + child;
        console.log("[File Constructor] Path: " + path);
        return this.$init(parent, child);
    };

    // Hook delete() 方法
    File.delete.implementation = function () {
        var path = this.getAbsolutePath();
        console.log("[File.delete] Deleting: " + path);
        return this.delete();  // 调用原始实现
    };

let f = Java.use("com.fpm.vzf.f");
f["a"].overload('java.lang.Runnable', 'long', 'long').implementation = function (runnable, j2, j3) {
    console.log(`f.a is called: runnable=${runnable}, j2=${j2}, j3=${j3}`);
    let result = this["a"](runnable, j2, j3);
    console.log(`f.a result=${result}`);
    return result;
};

let a = Java.use("com.b.a.a.a");
a["c"].overload('java.lang.String').implementation = function (str) {
    console.log(`a.c is called: str=${str}`);
    this["c"](str);
};
a["b"].overload('java.lang.String').implementation = function (str) {
    console.log(`a.b is called: str=${str}`);
    this["b"](str);
};

let i = Java.use("com.fpm.vzf.i");
i["b"].overload().implementation = function () {
    console.log(`i.b is called`);
    let result = this["b"]();
    let result2 = result - 160000
    console.log(`i.b result=${result}`);
    return result2;
};

    var TextUtils = Java.use("android.text.TextUtils");

    TextUtils.isEmpty.overload('java.lang.CharSequence').implementation = function (str) {
        var result = this.isEmpty(str);  // 调用原始实现
        console.log("[TextUtils.isEmpty] Input: " + str + " | Result: " + result);
        return result;
    };




});
