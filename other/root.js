function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}
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
Java.perform(function () {
    let DeviceUtils = Java.use("com.wl.ad.util.DeviceUtils");
DeviceUtils["isRoot"].implementation = function () {
    console.log(`DeviceUtils.isRoot is called`);
    let result = this["isRoot"]();
    console.log(`DeviceUtils.isRoot result=${result}`);
    return false;
};
let WJSdk = Java.use("a.WJSdk");
WJSdk["init"].implementation = function (context, wjId) {
    console.log(`WJSdk.init is called: context=${context}, wjId=${wjId}`);
    this["init"](context, wjId);
};

let Logger = Java.use("com.wl.ad.util.Logger");
Logger["d"].overload('java.lang.String', 'java.lang.String').implementation = function (category, msg) {
    console.log(`Logger.d is called: category=${category}, msg=${msg}`);
    this["d"](category, msg);
};

let JsonParser = Java.use("com.wl.ad.util.JsonParser");
JsonParser["parseRemoteConfig"].implementation = function (jsonString) {
    console.log(`JsonParser.parseRemoteConfig is called: jsonString=${jsonString}`);
    let result = this["parseRemoteConfig"](jsonString);
    console.log(`JsonParser.parseRemoteConfig result=${result}`);
    return result;
};

})