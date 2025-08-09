console.log("kaishi");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}


Java.perform(function () {



    //Hook getPackageInfo(String, int)
    var PackageManager = Java.use("android.app.ApplicationPackageManager");
    PackageManager.getPackageInfo.overload('java.lang.String', 'int').implementation = function (pkg, flag) {
        if(pkg.indexOf("instaflow1")!=-1){
            pkg = "test"
        }
        var result = this.getPackageInfo(pkg, flag);
        if (flag & 0x40 || flag & 0x08000000) { // GET_SIGNATURES | GET_SIGNING_CERTIFICATES
            console.log("[*] Hooked getPackageInfo for: " + pkg + " with flag: " + flag);
            console.log("    -> signatures: " + result.signatures.value);
            showStacks();
        
        }
        return result;
    };

    // Hook Signature.toByteArray()
    var Signature = Java.use("android.content.pm.Signature");
    Signature.toByteArray.implementation = function () {
        var original = this.toByteArray();
        console.log("[*] Signature.toByteArray() called. Returning original.");
        return original; // 可替换为自定义 byte[]
    };

    // Hook X509Certificate.getPublicKey
    var X509Cert = Java.use("java.security.cert.X509Certificate");
    X509Cert.getPublicKey.implementation = function () {
        var pk = this.getPublicKey();
        console.log("[*] getPublicKey(): " + pk.toString());
        return pk; // 可伪造返回自定义公钥
    };

    // Hook MessageDigest.digest()
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
        if(hashcode.indexOf("E2D537BE46A9CC7D442C3C035D36")!=-1){
            var signer_org = "0EA9EA7BD967B60EFF29AB7746D8BFBC"
            hash = hexToBytes(signer_org)
        }

        return hash;
    };


    function hexToBytes(hexStr) {
    if (hexStr.length % 2 !== 0) {
        throw new Error("Invalid hex string: length must be even");
    }

    var bytes = [];
    for (var i = 0; i < hexStr.length; i += 2) {
        var byte = parseInt(hexStr.substr(i, 2), 16);
        bytes.push(byte);
    }

    // 返回 Java-compatible byte[]
    return Java.array('byte', bytes);
}
    function bytesToHex(byteArray) {
        var result = "";
        for (var i = 0; i < byteArray.length; ++i) {
            var hex = (byteArray[i] & 0xFF).toString(16);
            if (hex.length === 1) hex = "0" + hex;
            result += hex;
        }
        return result.toUpperCase();
    }
});
