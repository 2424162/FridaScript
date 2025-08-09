
console.log("kaishi");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}


Java.perform(function () {

let C154993qRk = Java.use("X.qRk");
C154993qRk["checkVersion"].implementation = function (str) {
    console.log(`C154993qRk.checkVersion is called: str=${str}`);
    let result = this["checkVersion"](str);
    console.log(`C154993qRk.checkVersion result=${result}`);
    return result;
};

    var pm = Java.use("android.app.ApplicationPackageManager");

    pm.getPackageInfo.overload('java.lang.String', 'int').implementation = function (pkgName, flags) {
        console.log(">>> getPackageInfo called with:", pkgName, flags);
        var result = this.getPackageInfo(pkgName, flags);
        
        var code = result.versionCode.value
        console.log(code)
        if(String(code).indexOf("2023909020")!=-1){
                    console.log(">>> versionName = " + result.versionName.value);
        console.log(">>> versionCode = " + result.versionCode.value);
            showStacks()
        }
        return result;
    };

    let SsjjFNListener = Java.use("com.ssjj.fnsdk.core.SsjjFNListener");
SsjjFNListener["onCallback"].implementation = function (i, str, ssjjFNParams) {
    console.log(`SsjjFNListener.onCallback is called: i=${i}, str=${str}, ssjjFNParams=${ssjjFNParams}`);
    this["onCallback"](i, str, ssjjFNParams);
};
})