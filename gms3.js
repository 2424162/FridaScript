console.log("start");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {


    let GetTokenResponse = Java.use("com.google.android.gms.auth.aang.GetTokenResponse");
    GetTokenResponse["$init"].implementation = function (str, oauth2TokenMetadata) {
        console.log(`GetTokenResponse.$init is called: str=${str}, oauth2TokenMetadata=${oauth2TokenMetadata}`);
        this["$init"](str, oauth2TokenMetadata);
    };

    let TokenRequest = Java.use("com.google.android.gms.auth.firstparty.dataservice.TokenRequest");
TokenRequest["$init"].overload('android.accounts.Account', 'java.lang.String').implementation = function (account, str) {
    console.log(`TokenRequest.$init is called: account=${account}, str=${str}`);
    this["$init"](account, str);
};
let AppDescription = Java.use("com.google.android.gms.auth.firstparty.shared.AppDescription");
AppDescription["$init"].overload('int', 'int', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'boolean').implementation = function (i, i2, str, str2, str3, z) {
    console.log(`AppDescription.$init is called: i=${i}, i2=${i2}, str=${str}, str2=${str2}, str3=${str3}, z=${z}`);
    this["$init"](i, i2, str, str2, str3, z);
};

let TokenData = Java.use("com.google.android.gms.auth.TokenData");

// TokenData["a"].implementation = function (i) {
//     showStacks()
    
//     var  re = this["a"](i);
//     var ey = re.b.value;
//     console.log("TokenData:",ey)
//     return re;
// };
let aasp = Java.use('aasp');
let Tokenresponse = Java.use("com.google.android.gms.auth.firstparty.dataservice.TokenResponse");
let Tokendata = Java.use("com.google.android.gms.auth.TokenData");
aasp["a"].implementation = function (obj) {
    console.log(`aasp.a is called: obj=${obj}`);
    let result = this["a"](obj);
    console.log(`aasp.a result=${result}`);
    
     var tokenresponse  = Java.cast(obj,Tokenresponse)
    // var tokendata = Java.cast(tokenresponse.w.value,Tokendata)
    var tokendata1 = tokenresponse.w;
    //var data = tokendata.b.value.toString();
   // console.log("response==:",tokenresponse.w.value)
   console.log("data=====:",tokenresponse.p.value)
   console.log("data=====w:",tokenresponse.w.value)
   console.log("data=====:",tokenresponse.d.value)
   console.log("data=====:",obj.p)
    console.log("data=====:",tokendata1.b)

    return result;
};
});
