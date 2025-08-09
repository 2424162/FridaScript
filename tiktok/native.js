console.log("kaishi");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}


Java.perform(function () {

let a = Java.use("me.tigrik.a");
a["a"].implementation = function (obj) {
    console.log(`a.a is called: obj=${obj}`);

    // let result = this["a"](obj);
    // console.log(`a.a result=${result}`);
    // console.log("result type = " + result.$className);

     let result = Java.use("java.lang.String").$new("TRUE");
 //  result = TRUE
    return result;
};

    var MessageDigest = Java.use("java.security.MessageDigest");
    MessageDigest.digest.overload().implementation = function () {
        var hash = this.digest();
        var algor = this.getAlgorithm();
        var hashcode = bytesToHex(hash);
        console.log("[*] MessageDigest.digest() called. Result: " +algor +" : "+ bytesToHex(hash));
        if(hashcode.indexOf("F093D9D08895BE7A26AF40A14E4261")!=-1||
    hashcode.indexOf("266E282186459E2729B7BD6")!=-1||
    hashcode.indexOf("3B61C2A8")!=-1||
    hashcode.indexOf("0EA9EA7BD967B60")!=-1
            ){
            var byteArray = Java.array('byte', [1, 2, -3, 127]);
            hash = null
            console.log("foundsigner:"+hashcode);
            showStacks()
            return byteArray;
        }


        return hash;
    };
});

    function bytesToHex(byteArray) {
        var result = "";
        for (var i = 0; i < byteArray.length; ++i) {
            var hex = (byteArray[i] & 0xFF).toString(16);
            if (hex.length === 1) hex = "0" + hex;
            result += hex;
        }
        return result.toUpperCase();
    }