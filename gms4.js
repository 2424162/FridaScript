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


//     let xwz = Java.use("xwz");
//     xwz["d"].implementation = function (str, bArr) {
//         console.log(`xwz.d is called: str=${str}, bArr=${bArr}`);
//         let result = this["d"](str, bArr);
//         console.log(`xwz.d result=${result}`);
//         return result;
//     };

//     let ghjn = Java.use("ghjn");
// ghjn["b"].implementation = function (bArr, i, i2) {
//     console.log(`ghjn.b is called: bArr=${bArr}, i=${i}, i2=${i2}`);
//     this["b"](bArr, i, i2);
// };

 let ghje = Java.use("ghje");
ghje["w"].implementation = function (bArr) {

    let result = this["w"](bArr);
    if(bArr.length==33){
        console.log(`ghje.w is called: bArr=${bArr}`);
        bytesToString(bArr)
        showStacks()
        console.log("+++++++++++")
    }



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


// ghje["M"].implementation = function () {
//  //   console.log(`ghje.M is called`);
//     let result = this["M"]();
//     console.log(`ghje.M result=${result}`);
//     return result;
// };

// ghje["z"].implementation = function (b,i,i2) {
//  //   console.log(`ghje.z is called`);
//     let result = this["z"](b,i,i2);
//     console.log(`ghje.z result=${b}`);
//     // showStacks()
//     // console.log(result.a.value)
//     bytesToString(b) 

//     return result;
// };



// let ayxq = Java.use("ayxq");
// ayxq["b"].implementation = function (fhnnVar) {
//     console.log(`ayxq.b is called: fhnnVar=${fhnnVar}`);
//     let result = this["b"](fhnnVar);
//     bytesToString(bArr)
//     console.log(`ayxq.b result=${result}`);
//     return result;
// };

// let ByteArrayOutputStream = Java.use("java.io.ByteArrayOutputStream");
// ByteArrayOutputStream["write"].overload('[B', 'int', 'int').implementation = function (fhnnVar,in1,int2) {
//  //  showStacks()
//     console.log(`ByteArrayOutputStreamis called: fhnnVar=${fhnnVar}`,in1,"   ",int2);
//     let result = this["write"](fhnnVar,in1,int2);

//  //   console.log(`ByteArrayOutputStream result=${result}`);
//  bytesToString(fhnnVar)
//  console.log("system==============")
//     return result;
// };
// ByteArrayOutputStream["write"].overload('int').implementation = function (fhnnVar) {
//     console.log(`ByteArrayOutputStream.b is called: fhnnVar=${fhnnVar}`);
//     let result = this["write"](fhnnVar);
//     console.log(`ByteArrayOutputStream.b result=${result}`);
//     return result;
// };
// ByteArrayOutputStream["writeBytes"].implementation = function (fhnnVar) {
//     console.log(`writeBytes.b is called: fhnnVar=${fhnnVar}`);
//     let result = this["writeBytes"](fhnnVar);
//     console.log(`writeBytes.b result=${result}`);
//     return result;
// };

 let ghjm = Java.use("ghjm");
// ghjm["b"].implementation = function (bArr, i, i2) {
//   //  
//     this["b"](bArr, i, i2);
//     if(i2 == 140){
//         bytesToString(bArr)
//         console.log(`ghjm.b is called: bArr=${bArr}, i=${i}, i2=${i2}`);
//         showStacks();
//     }
// };

// ghjm["l"].implementation = function (bArr, i, i2) {
//     console.log(`ghjm.l is called: bArr=${bArr}, i=${i}, i2=${i2}`);
//     this["l"](bArr, i, i2);
//     bytesToString(bArr)
//   //  showStacks()
// };

// ghje["z"].implementation = function (bArr, i, i2) {
//    // if(bArr.length <= 43 && bArr.length >= 23){
//         showStacks()
//         console.log(`ghje.z is called: bArr=${bArr}, i=${i}, i2=${i2}`);
//         let str = bytesToString(bArr)
//         console.log(str)
//  //   }

//     let result = this["z"](bArr, i, i2);

//     return result;
// };

    // var System = Java.use("java.lang.System");
    // // Hook onCreate 方法
    // System.arraycopy.overload('[B', 'int', '[B', 'int', 'int').implementation = function (arg1,arg2,arg3,arg4,arg5) {



    //        // console.log("arraycopy:",arg1,arg2,arg3,arg4,arg5);
    //         let str1 = bytesToString(arg1)
    //         let str2 = bytesToString(arg3)
    //         if(str1.includes("AesGcmKey")||str2.includes("AesGcmKey") && str1.length<300){

    //             console.log("arraycopy:",arg1,arg2,"++++++++++",arg3,arg4,arg5,);
    //             console.log("org:",str1);
    //             console.log("to:",str2);
    //          //   showStacks()
    //             console.log("---------")

    //         }

        
    //     // 调用原始方法
    //     this.arraycopy(arg1,arg2,arg3,arg4,arg5);


    // };


// ghja["o"].implementation = function (bArr) {
//  //   showStacks();
   
//     console.log(`ghja.o is called: bArr=${bArr}`);
//     this["o"](bArr);
// };
// let ghiy = Java.use("ghiy");
// ghiy["a"].implementation = function (ghjpVar, bArr) {
//     console.log(`ghiy.a is called: ghjpVar=${ghjpVar}, bArr=${bArr}`);
//     let result = this["a"](ghjpVar, bArr);
//     bytesToString(bArr)
//    // showStacks()
//     console.log(`ghiy.a result=${result}`);
//     return result;
// };
// let ghjp = Java.use("ghjp");
// ghjp["ai"].implementation = function (bArr) {
//     console.log(`ghjp.ai is called: bArr=${bArr}`);
//     let result = this["ai"](bArr);
//     bytesToString(bArr)
//     console.log(`ghjp.ai result=${result}`);
//     return result;
// };

// let ghmp = Java.use("ghmp");
// ghmp["c"].implementation = function (null1, null2, null3, null4, null5, null6) {
//        let result = this["c"](null1, null2, null3, null4, null5, null6);
//     if(null2.length<3000){
//         console.log(`ghmp.c is called: null=${null1}, null=${null2}, null=${null3}, null=${null4}, null=${null5}, null=${null6}`);
//         bytesToString(null2)
//     }
//     // bytesToString(null2)
//     // console.log(`ghmp.c result=${result}`);
//     return result;
// };

// let ghod = Java.use("ghod");
// ghod["a"].implementation = function (null1, null2, null3, null4) {
//     console.log(`ghod.a is called: null=${null1}, null=${null2}, null=${null3}, null=${null4}`);
//     bytesToString(null2)
//     let result = this["a"](null1, null2, null3, null4);
//     console.log(`ghod.a result=${result}`);
//     return result;
// };
// let ghku = Java.use("ghku");
// ghku["A"].implementation = function (ghkuVar, bArr, i, i2, ghkbVar) {
//     console.log(`ghku.A is called: ghkuVar=${ghkuVar}, bArr=${bArr}, i=${i}, i2=${i2}, ghkbVar=${ghkbVar}`);
//     let result = this["A"](ghkuVar, bArr, i, i2, ghkbVar);
//     bytesToString(bArr)

//     if(i2==56){
//         showStacks()
//     }
//     console.log(`ghku.A result=${result}`);
//     return result;
// };

// let fqit = Java.use("fqit");
// fqit["$init"].implementation = function (bArr, i) {
//     console.log(`fqit.$init is called: bArr=${bArr}, i=${i}`);
//     bytesToString(bArr)
//     this["$init"](bArr, i);
// };
// fqit["toString"].implementation = function () {
//     console.log(`fqit.toString is called`);
//     let result = this["toString"]();

//     console.log(`fqit.toString result=${result}`);
//     return result;
// };
// fqit["c"].implementation = function () {
//     console.log(`fqit.c is called`);
//     let result = this["c"]();

//     console.log(`fqit.c result=${result}`);
//     return result;
// };
// let fpss = Java.use("fpss");
// fpss["a"].implementation = function (str) {
//     console.log(`fpss.a is called: str=${str}`);
//     let result = this["a"](str);
//     bytesToString(bArr)
//     console.log(`fpss.a result=${result}`);
//     return result;
// };
// fpss["b"].implementation = function (str) {
//     console.log(`fpss.b is called: str=${str}`);
//     let result = this["b"](str);
//     bytesToString(bArr)
//     console.log(`fpss.b result=${result}`);
//     return result;
// };

// let fpsg = Java.use("fpsg");
// fpsg["a"].implementation = function (str, ghjeVar, i, fpzaVar, num) {
//     console.log(`fpsg.a is called: str=${str}, ghjeVar=${ghjeVar}, i=${i}, fpzaVar=${fpzaVar}, num=${num}`);
//     let string2 = "EciesAeadHkdfPublicKeytest"
//     let result = this["a"](string2, ghjeVar, i, fpzaVar, num);
//     console.log(`fpsg.a result=${result}`);
//     return result;
// };
});