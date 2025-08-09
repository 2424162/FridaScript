
console.log("kaishi");

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

    

    // 打印调用堆栈的辅助函数
    function printStackTrace() {
        const Exception = Java.use("java.lang.Exception");
        const Log = Java.use("android.util.Log");
        const stack = Log.getStackTraceString(Exception.$new());
        console.log('    Stack Trace:\n' + stack);
    }

    var old_string = null;
    var old_stringbuilder = null;
    // Hook java.lang.String.length()
    const StringClass = Java.use('java.lang.String');
    StringClass.length.implementation = function () {
        const result = this.length();
        let this_o = this.toString()
                if(result< 4){
            return result;
        }
        if(old_string != this_o){
            console.log('    Value: ' + this_o+'    Length: ' + result);
        }
        old_string = this_o;
        
       // console.log('\n[+] java.lang.String.length() called');


        return result; // 可改为 return 999;
    };

    // Hook java.lang.StringBuilder.length()
    const StringBuilderClass = Java.use('java.lang.StringBuilder');
    StringBuilderClass.length.implementation = function () {
        const result = this.length();

        let this_b = this.toString()
        if(result< 4){
            return result;
        }
        if(old_stringbuilder != this_b){
            console.log('    Value: ' + this_b+'    Length: ' + result);
        }
        old_stringbuilder = this_b;
        

       // console.log('\n[+] java.lang.StringBuilder.length() called');
        console.log('    Content: ' + this.toString()+'    Length: ' + result);

        return result;
    };


//     let FNUnityInvoker = Java.use("com.ssjj.fnsdk.unity.core.FNUnityInvoker");
// FNUnityInvoker["setCallbackDefault"].implementation = function (str, str2) {
//     console.log(`FNUnityInvoker.setCallbackDefault is called: str=${str}, str2=${str2}`);
//     let result = this["setCallbackDefault"](str, str2);
//     console.log(`FNUnityInvoker.setCallbackDefault result=${result}`);
//     return result;
// };

// let UnityBackHolder = Java.use("com.ssjj.fnsdk.unity.core.FNUnityInvoker$UnityBackHolder");
// UnityBackHolder["back"].implementation = function (str) {
//     console.log(`UnityBackHolder.back is called: str=${str}`);
//     let result = this["back"](str);
//     console.log(`UnityBackHolder.back result=${result}`);
//     return result;
// };
// let Purchase = Java.use("com.appcoins.sdk.billing.Purchase");
// Purchase["$init"].implementation = function (orderId, itemType, originalJson, signature, purchaseTime, purchaseState, developerPayload, token, packageName, sku, isAutoRenewing) {
//     console.log(`Purchase.$init is called: orderId=${orderId}, itemType=${itemType}, originalJson=${originalJson}, signature=${signature}, purchaseTime=${purchaseTime}, purchaseState=${purchaseState}, developerPayload=${developerPayload}, token=${token}, packageName=${packageName}, sku=${sku}, isAutoRenewing=${isAutoRenewing}`);
//     this["$init"](orderId, itemType, originalJson, signature, purchaseTime, purchaseState, developerPayload, token, packageName, sku, isAutoRenewing);
// };

// let SsjjFNListener = Java.use("com.ssjj.fnsdk.core.SsjjFNListener");
// SsjjFNListener["onCallback"].implementation = function (i, str, ssjjFNParams) {
//     console.log(`SsjjFNListener.onCallback is called: i=${i}, str=${str}, ssjjFNParams=${ssjjFNParams}`);
//     this["onCallback"](i, str, ssjjFNParams);
// };
// let ac = Java.use("com.ssjj.fnsdk.lib.impl.ac");
// ac["$init"].implementation = function (aaVar, fNBack, str, str2) {
//     console.log(`ac.$init is called: aaVar=${aaVar}, fNBack=${fNBack}, str=${str}, str2=${str2}`);
//     this["$init"](aaVar, fNBack, str, str2);
// };

// ac["onCallback"].implementation = function (i, str, ssjjFNParams) {
//     console.log(`ac.onCallback is called: i=${i}, str=${str}, ssjjFNParams=${ssjjFNParams}`);
//     this["onCallback"](i, str, ssjjFNParams);
// };

// let FNEntity = Java.use("com.ssjj.fnsdk.lib.core.FNEntity");
// FNEntity["toJson"].implementation = function () {
//     console.log(`FNEntity.toJson is called`);
//     let result = this["toJson"]();
//     console.log(`FNEntity.toJson result=${result}`);
//     return result;
// };



// let UnityPlayer = Java.use("com.unity3d.player.UnityPlayer");
// UnityPlayer["UnitySendMessage"].implementation = function (str, str2, str3) {
//     console.log(`UnityPlayer.UnitySendMessage is called: str=${str}, str2=${str2}, str3=${str3}`);
//     this["UnitySendMessage"](str, str2, str3);
// };


// UnityPlayer["nativeUnitySendMessage"].implementation = function (str, str2, bArr) {
//     console.log(`UnityPlayer.nativeUnitySendMessage is called: str=${str}, str2=${str2}, bArr=${bArr}`);
//     this["nativeUnitySendMessage"](str, str2, bArr);
// };

// let SsjjFNSDK = Java.use("com.ssjj.fnsdk.core.SsjjFNSDK");
// SsjjFNSDK["invoke"].implementation = function (activity, str, ssjjFNParams, ssjjFNListener) {
//     console.log(`SsjjFNSDK.invoke is called: activity=${activity}, str=${str}, ssjjFNParams=${ssjjFNParams}, ssjjFNListener=${ssjjFNListener}`);
//     let result = this["invoke"](activity, str, ssjjFNParams, ssjjFNListener);
//     console.log(`SsjjFNSDK.invoke result=${result}`);
//     return result;
// };



});
