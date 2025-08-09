console.log("start");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}


function bytesToString(arr) {
    var str = '';
    arr = new Uint8Array(arr);
    for (var i in arr) {
        str += String.fromCharCode(arr[i]);
    }
    //console.log(str)

    return str;
}

Java.perform(function () {

    let fqit = Java.use("fqit");
    fqit["c"].implementation = function () {
        console.log(`fqit.c is called`);
        let result = this["c"]();
        console.log(`fqit.c result=${result}`);
        return result;
    };

    let fppw = Java.use("fppw");
    fppw["b"].implementation = function (bigInteger, i) {
        console.log(`fppw.b is called: bigInteger=${bigInteger}, i=${i}`);
        let result = this["b"](bigInteger, i);
        console.log(`fppw.b result=${result}`);
        return result;
    };
    let ByteArrayOutputStream = Java.use("java.io.ByteArrayOutputStream");
ByteArrayOutputStream["write"].overload('[B', 'int', 'int').implementation = function (fhnnVar,in1,int2) {
 //  showStacks()
  //  console.log(`ByteArrayOutputStreamis called: fhnnVar=${fhnnVar}`,in1,"   ",int2);
    let result = this["write"](fhnnVar,in1,int2);

 //   console.log(`ByteArrayOutputStream result=${result}`);
    
    let str1 = bytesToString(fhnnVar)
    if(str1.includes("googleapis.com/google.crypto.tink.AesGcmKey")){
        console.log(`ByteArrayOutputStreamis called: fhnnVar=${fhnnVar}`," +++++   "+in1,"   ",int2);
        console.log("write:",str1)
        console.log("+=============")
    }
    
        return result;
};



 let ghjm = Java.use("ghjm");

});