
console.log("kaishi");

function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {

let Ut = Java.use("com.ssjjsy.utils.Ut");
Ut["logCommonI"].overload('java.lang.String', 'java.lang.String').implementation = function (str, str2) {
    //console.log(`Ut.logCommonI is called: str=${str}, str2=${str2}`);
    this["logCommonI"](str, str2);
};
let AnonymousClass1 = Java.use("com.ssjj.fnsdk.tool.catappult.core.CatappultPay$1");
AnonymousClass1["onPurchasesUpdated"].implementation = function (responseCode, purchases) {
    responseCode=0
    console.log("purchases class: " + purchases.$className);
    showStacks();
    console.log(`AnonymousClass1.onPurchasesUpdated is called: responseCode=${responseCode}, purchases=${purchases}`);
    this["onPurchasesUpdated"](responseCode, purchases);
};
let SsjjFNListener = Java.use("com.ssjj.fnsdk.core.SsjjFNListener");
SsjjFNListener["onCallback"].implementation = function (i, str, ssjjFNParams) {
    console.log(ssjjFNParams.$className)
    console.log(`SsjjFNListener.onCallback is called: i=${i}, str=${str}, ssjjFNParams=${ssjjFNParams}`);
    this["onCallback"](i, str, ssjjFNParams);
};

    let FNUnityInvoker = Java.use("com.ssjj.fnsdk.unity.core.FNUnityInvoker");
FNUnityInvoker["setCallbackDefault"].implementation = function (str, str2) {
    console.log(`FNUnityInvoker.setCallbackDefault is called: str=${str}, str2=${str2}`);
    let result = this["setCallbackDefault"](str, str2);
    console.log(`FNUnityInvoker.setCallbackDefault result=${result}`);
    return result;
};

let UnityBackHolder = Java.use("com.ssjj.fnsdk.unity.core.FNUnityInvoker$UnityBackHolder");
UnityBackHolder["back"].implementation = function (str) {
    console.log(`UnityBackHolder.back is called: str=${str}`);
    let result = this["back"](str);
    console.log(`UnityBackHolder.back result=${result}`);
    return result;
};
let Purchase = Java.use("com.appcoins.sdk.billing.Purchase");
Purchase["$init"].implementation = function (orderId, itemType, originalJson, signature, purchaseTime, purchaseState, developerPayload, token, packageName, sku, isAutoRenewing) {
    console.log(`Purchase.$init is called: orderId=${orderId}, itemType=${itemType}, originalJson=${originalJson}, signature=${signature}, purchaseTime=${purchaseTime}, purchaseState=${purchaseState}, developerPayload=${developerPayload}, token=${token}, packageName=${packageName}, sku=${sku}, isAutoRenewing=${isAutoRenewing}`);
    this["$init"](orderId, itemType, originalJson, signature, purchaseTime, purchaseState, developerPayload, token, packageName, sku, isAutoRenewing);
};

SsjjFNListener["onCallback"].implementation = function (i, str, ssjjFNParams) {
    console.log(`SsjjFNListener.onCallback is called: i=${i}, str=${str}, ssjjFNParams=${ssjjFNParams}`);
    this["onCallback"](i, str, ssjjFNParams);
};
let ac = Java.use("com.ssjj.fnsdk.lib.impl.ac");
ac["$init"].implementation = function (aaVar, fNBack, str, str2) {
    console.log(`ac.$init is called: aaVar=${aaVar}, fNBack=${fNBack}, str=${str}, str2=${str2}`);
    this["$init"](aaVar, fNBack, str, str2);
};

ac["onCallback"].implementation = function (i, str, ssjjFNParams) {
    console.log(`ac.onCallback is called: i=${i}, str=${str}, ssjjFNParams=${ssjjFNParams}`);
    this["onCallback"](i, str, ssjjFNParams);
};

let FNEntity = Java.use("com.ssjj.fnsdk.lib.core.FNEntity");
FNEntity["toJson"].implementation = function () {
    console.log(`FNEntity.toJson is called`);
    let result = this["toJson"]();
    console.log(`FNEntity.toJson result=${result}`);
    return result;
};



let UnityPlayer = Java.use("com.unity3d.player.UnityPlayer");
UnityPlayer["UnitySendMessage"].implementation = function (str, str2, str3) {
    console.log(`UnityPlayer.UnitySendMessage is called: str=${str}, str2=${str2}, str3=${str3}`);
    this["UnitySendMessage"](str, str2, str3);
};


UnityPlayer["nativeUnitySendMessage"].implementation = function (str, str2, bArr) {
    console.log(`UnityPlayer.nativeUnitySendMessage is called: str=${str}, str2=${str2}, bArr=${bArr}`);
    this["nativeUnitySendMessage"](str, str2, bArr);
};

let SsjjFNSDK = Java.use("com.ssjj.fnsdk.core.SsjjFNSDK");
SsjjFNSDK["invoke"].implementation = function (activity, str, ssjjFNParams, ssjjFNListener) {
    console.log(`SsjjFNSDK.invoke is called: activity=${activity}, str=${str}, ssjjFNParams=${ssjjFNParams}, ssjjFNListener=${ssjjFNListener}`);
    let result = this["invoke"](activity, str, ssjjFNParams, ssjjFNListener);
    console.log(`SsjjFNSDK.invoke result=${result}`);
    return result;
};

let CatappultPay = Java.use("com.ssjj.fnsdk.tool.catappult.core.CatappultPay");
CatappultPay["sendOrder"].implementation = function (type, list) {
    console.log(`CatappultPay.sendOrder is called: type=${type}, list=${list}`);
    this["sendOrder"](type, list);
};

let aa = Java.use("com.ssjj.fnsdk.lib.impl.aa");
aa["a"].overload('java.lang.String', 'com.ssjj.fnsdk.lib.sdk.FNParam', 'com.ssjj.fnsdk.lib.sdk.FNBack').implementation = function (str, fNParam, fNBack) {
    console.log(`aa.a is called: str=${str}, fNParam=${fNParam}, fNBack=${fNBack}`);
    let result = this["a"](str, fNParam, fNBack);
    console.log(`aa.a result=${result}`);
    return result;
};


});