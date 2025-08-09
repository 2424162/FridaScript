console.log("start")

        // 获取 Activity 类
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {

    let xws = Java.use("com.android.okhttp.internal.huc.HttpURLConnectionImpl");
xws["getOutputStream"].implementation = function () {
 //   console.log(`xws.a is called: fpefVar=${fpefVar}, str=${str}`);
    let result = this["getOutputStream"]();
    console.log(`xws.a result=${result}`);
    return result;
};
    let OutputStream = Java.use("java.io.OutputStream");
OutputStream["write"].overload('[B', 'int', 'int').implementation = function (q,w,e) {
    console.log(`xws.a is called: fpefVar=${q}, str=${e}`);
    let result = this["write"](q,w,e);
    console.log(`xws.a result=${result}`);
    return result;
};
OutputStream["write"].overload('[B').implementation = function (q) {
    console.log(`xws.a is called: fpefVar=${q}`);
    let result = this["write"](q);
    console.log(`xws.a result=${q}`);
    return result;
};

xws["setRequestProperty"].implementation = function (q,w) {
    console.log(`setRequestProperty is called: fpefVar=${q},${w}`);
    send(`setRequestProperty is called: fpefVar=${q},${w}`);
    let result = this["setRequestProperty"](q,w);
    console.log(`setRequestPropertya result=${q}`);
    return result;
};
    // var Request = Java.use("okhttp3.Request");

    // Request.body.overload().implementation = function() {
    //     console.log("Intercepted Request: " + this.url().toString());
    //     return this.body();
    // };
    //     var OpenSSLAeadCipher = Java.use("com.google.android.gms.org.conscrypt.OpenSSLAeadCipher");

    // OpenSSLAeadCipher.engineDoFinal.overload("[B","int","int").implementation = function(input,a,s) {
    //     console.log("AES-GCM Encrypted Data: " + Java.use("android.util.Base64").encodeToString(input, 0));
    //     return this.doFinal(input,a,s);
    // };

    var Cipher = Java.use("javax.crypto.Cipher");
    Cipher.doFinal.overload("[B").implementation = function(input){

    let re = this.doFinal(input);
    console.log("doFinal:"+input)
    return re;
    }

});
