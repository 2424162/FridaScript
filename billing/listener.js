

console.log("kaishi");

function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {

let CatapultAppcoinsBilling = Java.use("com.appcoins.sdk.billing.CatapultAppcoinsBilling");
CatapultAppcoinsBilling["getPurchaseFinishedListener"].implementation = function () {
    console.log(`CatapultAppcoinsBilling.getPurchaseFinishedListener is called`);
    let result = this["getPurchaseFinishedListener"]();
    console.log(`CatapultAppcoinsBilling.getPurchaseFinishedListener result=${result}`);
    showStacks()
    return result;
};

let AnonymousClass1 = Java.use("com.ssjj.fnsdk.tool.catappult.core.CatappultPay$1");
AnonymousClass1["onPurchasesUpdated"].implementation = function (responseCode, purchases) {
    responseCode = 0;
    console.log(`AnonymousClass1.onPurchasesUpdated is called: responseCode=${responseCode}, purchases=${purchases}`);
    this["onPurchasesUpdated"](responseCode, purchases);
};


let EventUtils = Java.use("com.ssjj.fnsdk.tool.catappult.core.EventUtils");
EventUtils["logYdEvent"].implementation = function (eventTag, eventName, eventValue) {
    console.log(`EventUtils.logYdEvent is called: eventTag=${eventTag}, eventName=${eventName}, eventValue=${eventValue}`);
    this["logYdEvent"](eventTag, eventName, eventValue);
};

let c = Java.use("com.ssjjsy.base.plugin.base.pay.third.core.g.c");
c["a"].overload('com.ssjjsy.base.plugin.base.pay.third.core.view.b', 'org.json.JSONObject').implementation = function (bVar, jSONObject) {
    console.log(`c.a is called: bVar=${bVar}, jSONObject=${jSONObject}`);
    let result = this["a"](bVar, jSONObject);
    console.log(`c.a result=${result}`);
    return result;
};
let Ut = Java.use("com.ssjjsy.utils.Ut");
Ut["logBaseE"].overload('java.lang.String', 'java.lang.String').implementation = function (str, str2) {
    console.log(`Ut.logBaseE is called: str=${str}, str2=${str2}`);
    this["logBaseE"](str, str2);
};
let LogUtil = Java.use("com.ssjj.fnsdk.core.LogUtil");
LogUtil["e"].overload('java.lang.String').implementation = function (str) {
    console.log(`LogUtil.e is called: str=${str}`);
    this["e"](str);
};

LogUtil["e"].overload('java.lang.String', 'java.lang.String').implementation = function (str, str2) {
    console.log(`LogUtil.e is called: str=${str}, str2=${str2}`);
    this["e"](str, str2);
};

LogUtil["eEncodeLog"].implementation = function (str) {
    console.log(`LogUtil.eEncodeLog is called: str=${str}`);
    this["eEncodeLog"](str);
};

LogUtil["eLog"].implementation = function (str) {
    console.log(`LogUtil.eLog is called: str=${str}`);
    this["eLog"](str);
};

LogUtil["exceptionLog"].overload('java.lang.String', 'java.lang.Throwable').implementation = function (str, th) {
    console.log(`LogUtil.exceptionLog is called: str=${str}, th=${th}`);
    this["exceptionLog"](str, th);
};

LogUtil["exceptionLog"].overload('java.lang.Throwable').implementation = function (th) {
    console.log(`LogUtil.exceptionLog is called: th=${th}`);
    this["exceptionLog"](th);
};

LogUtil["i"].overload('java.lang.String').implementation = function (str) {
    console.log(`LogUtil.i is called: str=${str}`);
    this["i"](str);
};

LogUtil["i"].overload('java.lang.String', 'java.lang.String').implementation = function (str, str2) {
    console.log(`LogUtil.i is called: str=${str}, str2=${str2}`);
    this["i"](str, str2);
};

LogUtil["iEndoceLog"].implementation = function (str) {
    console.log(`LogUtil.iEndoceLog is called: str=${str}`);
    this["iEndoceLog"](str);
};

LogUtil["log"].implementation = function (str) {
    console.log(`LogUtil.log is called: str=${str}`);
    this["log"](str);
};


})