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
let ResponseBody = Java.use("okhttp3.ResponseBody");
ResponseBody["string"].implementation = function () {
    console.log(`ResponseBody.string is called`);
    let result = this["string"]();
    console.log(`ResponseBody.string result=${result}`);
    return result;
};

});
