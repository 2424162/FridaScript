
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}
function bytesToString(arr) {
    var str = '';
    arr = new Uint8Array(arr);
    for (var i in arr) {
        str += String.fromCharCode(arr[i]);
    }
    console.log(str)

    return str;
}

Java.perform(function() {
let UnityPlayer = Java.use("com.unity3d.player.UnityPlayer");
UnityPlayer["UnitySendMessage"].implementation = function (str, str2, str3) {
    console.log(`UnityPlayer.UnitySendMessage is called: str=${str}, str2=${str2}, str3=${str3}`);
    this["UnitySendMessage"](str, str2, str3);
};

let ac = Java.use("com.yongyong.nsdk.ac");
ac["run"].implementation = function () {
    console.log(`ac.run is called`);
    this["run"]();
};

let SdkAdapter = Java.use("com.yinhan.xsdk.SdkAdapter");
SdkAdapter["pay"].implementation = function (str) {
    console.log(`SdkAdapter.pay is called: str=${str}`);
    this["pay"](str);
};

let AnonymousClass7 = Java.use("com.yinhan.xsdk.SdkAdapter$7");
AnonymousClass7["run"].implementation = function () {
    console.log(`AnonymousClass7.run is called`);
    this["run"]();
};
SdkAdapter["sendResponse"].implementation = function (i, i2, z, str) {
    console.log(`SdkAdapter.sendResponse is called: i=${i}, i2=${i2}, z=${z}, str=${str}`);
    this["sendResponse"](i, i2, z, str);
};

let AnonymousClass1 = Java.use("com.yinhan.xsdk.SdkAdapter$7$1");
AnonymousClass1["callback"].overload('int', 'java.lang.Object').implementation = function () {
    console.log(`AnonymousClass1.callback is called`);
    this["callback"]();
};
let NSdk = Java.use("com.yongyong.nsdk.NSdk");
NSdk["pay"].implementation = function (activity, nSPayInfo, nSdkListener) {
    console.log(`NSdk.pay is called: activity=${activity}, nSPayInfo=${nSPayInfo}, nSdkListener=${nSdkListener}`);
    this["pay"](activity, nSPayInfo, nSdkListener);
};

// let c = Java.use("com.yongyong.nsdk.tool.c");
// c["onPostExecute"].implementation = function () {
//     console.log(`c.onPostExecute is called`);
//     this["onPostExecute"]();
// };


let b = Java.use("com.yongyong.nsdk.a.b");
b["a"].overload('org.json.JSONObject').implementation = function (jSONObject) {
    console.log(`b.a is called: jSONObject=${jSONObject}`);
    this["a"](jSONObject);
};


let SsjjOverseasNSdk = Java.use("com.yinhan.nsdk.ssjj_overseas.v3_1_8_40_6.SsjjOverseasNSdk");
SsjjOverseasNSdk["startPay"].implementation = function (activity, nSPayInfo, str, str2) {
    console.log(`SsjjOverseasNSdk.startPay is called: activity=${activity}, nSPayInfo=${nSPayInfo}, str=${str}, str2=${str2}`);
    this["startPay"](activity, nSPayInfo, str, str2);
};


let FNCode = Java.use("com.ssjj.fnsdk.lib.sdk.FNCode");
FNCode["isSucc"].implementation = function (i) {
    console.log(`FNCode.isSucc is called: i=${i}`);
    let result = this["isSucc"](i);
    console.log(`FNCode.isSucc result=${result}`);
    return result;
};

let AnonymousClass3 = Java.use("com.yinhan.nsdk.ssjj_overseas.v3_1_8_40_6.SsjjOverseasNSdk$3");
AnonymousClass3["onBack"].implementation = function (i, str3, fNParam) {
    console.log(`AnonymousClass3.onBack is called: i=${i}, str3=${str3}, fNParam=${fNParam}`);
    this["onBack"](i, str3, fNParam);
};

let FNSDK = Java.use("com.ssjj.fnsdk.lib.sdk.FNSDK");
FNSDK["invoke"].overload('java.lang.String', 'com.ssjj.fnsdk.lib.sdk.FNParam', 'com.ssjj.fnsdk.lib.sdk.FNBack').implementation = function (str, fNParam, fNBack) {
    console.log(`FNSDK.invoke is called: str=${str}, fNParam=${fNParam}, fNBack=${fNBack}`);
    let result = this["invoke"](str, fNParam, fNBack);
    console.log(`FNSDK.invoke result=${result}`);
    return result;
};

//let AnonymousClass3 = Java.use("com.yinhan.nsdk.ssjj_overseas.v3_1_8_40_6.SsjjOverseasNSdk$3");
AnonymousClass3["onBack"].implementation = function (i, str3, fNParam) {
    console.log(`AnonymousClass3.onBack is called: i=${i}, str3=${str3}, fNParam=${fNParam}`);
    this["onBack"](i, str3, fNParam);
};

let aa = Java.use("com.ssjj.fnsdk.lib.impl.aa");
aa["a"].overload('java.lang.String', 'com.ssjj.fnsdk.lib.sdk.FNParam', 'com.ssjj.fnsdk.lib.sdk.FNBack').implementation = function (str, fNParam, fNBack) {
    console.log(`aa.a is called: str=${str}, fNParam=${fNParam}, fNBack=${fNBack}`);
    var name = fNBack.$className;
    console.log("name::",name)

    let result = this["a"](str, fNParam, fNBack);

    console.log(`aa.a result=${result}`);
    return result;
};



let FNBack = Java.use("com.ssjj.fnsdk.lib.sdk.FNBack");
FNBack["onBack"].implementation = function (i, str, fNParam) {
    console.log(`FNBack.onBack is called: i=${i}, str=${str}, fNParam=${fNParam}`);
    this["onBack"](i, str, fNParam);
};


NSdk["onPayCallback"].implementation = function (i, str) {
    console.log(`NSdk.onPayCallback is called: i=${i}, str=${str}`);
    this["onPayCallback"](i, str);
};

let SsjjFNPayListenerImpl = Java.use("com.ssjj.fnsdk.core.listener.SsjjFNPayListenerImpl");
SsjjFNPayListenerImpl["$init"].implementation = function (ssjjFNPayListener) {
    console.log(`SsjjFNPayListenerImpl.$init is called: ssjjFNPayListener=${ssjjFNPayListener}`);
    this["$init"](ssjjFNPayListener);
};
SsjjFNPayListenerImpl["a"].implementation = function () {
    console.log(`SsjjFNPayListenerImpl.a is called`);
    let result = this["a"]();
    console.log(`SsjjFNPayListenerImpl.a result=${result}`);
    return result;
};
SsjjFNPayListenerImpl["onCancel"].implementation = function () {
    console.log(`SsjjFNPayListenerImpl.onCancel is called`);
    this["onCancel"]();
};
SsjjFNPayListenerImpl["onFailed"].implementation = function (str) {
    console.log(`SsjjFNPayListenerImpl.onFailed is called: str=${str}`);
    this["onFailed"](str);
};
SsjjFNPayListenerImpl["onStartPay"].implementation = function (ssjjFNProduct) {
    console.log(`SsjjFNPayListenerImpl.onStartPay is called: ssjjFNProduct=${ssjjFNProduct}`);
    this["onStartPay"](ssjjFNProduct);
};
SsjjFNPayListenerImpl["onSucceed"].implementation = function () {
    console.log(`SsjjFNPayListenerImpl.onSucceed is called`);
    this["onSucceed"]();
};



});