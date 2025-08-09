console.log("kaishi");
function showStacks() {
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {
    let C17222b = Java.use("cj.b");
    C17222b["g"].implementation = function (buf, i12, i13) {
        //showStacks()
        //console.log(`C17222b.g is called: buf=${buf}, i12=${i12}, i13=${i13}`);
        this["g"](buf, i12, i13);
    };
    let b = Java.use("Tg1.b");
    b["H"].implementation = function (str) {
        // console.log(`b.H is called: str=${str}`);
        // if(str.length>200){
        //     showStacks()
        // }
        this["H"](str);
    };

    let r1 = Java.use("y80.r1");
    r1["write"].implementation = function (gVar) {
        console.log(`r1.write is called: gVar=${gVar}`);
        let b = this.b.value;

        let c = this.c.value;
        console.log("BC = ",b,"=====",c);
        this["write"](gVar);
    };


r1["$init"].overload('y80.s1', 'java.lang.String', 'java.lang.String').implementation = function (s1Var, str, str2) {
    // console.log(`r1.$init is called: s1Var=${s1Var}, str=${str}, str2=${str2}`);
    // showStacks();
    this["$init"](s1Var, str, str2);

};
r1["$init"].overload('y80.r1').implementation = function (r1Var) {
  //  console.log(`2.r1.$init is called: r1Var=${r1Var}`);
    this["$init"](r1Var);
};
let a = Java.use("y80.r1$a");
a["a"].implementation = function (gVar, dVar) {
 //   console.log(`a.a is called: gVar=${gVar}, dVar=${dVar}`);
    this["a"](gVar, dVar);
};

let W = Java.use("NP0.W");
W["$init"].implementation = function (c11826n, str, enumC22652c, continuation) {
 //   console.log(`W.$init is called: c11826n=${c11826n}, str=${str}, enumC22652c=${enumC22652c}, continuation=${continuation}`);
 //   showStacks();
    this["$init"](c11826n, str, enumC22652c, continuation);
};
let base64 = Java.use("android.util.Base64")
base64.encodeToString.overload('[B', 'int').implementation = function(arg1,arg2){
    let re = this.encodeToString(arg1,arg2)
   // console.log("base64 arg: ",arg1,arg2)
    console.log("base64 return:",re)
    return  re;
}
let registration = Java.use("com.linecorp.registration.ui.fragment.AccountRegistrationFragment$a");
registration["a"].implementation = function (externalAccountProviderType, token) {
    // showStacks()
    // console.log(`a.a is called: externalAccountProviderType=${externalAccountProviderType}, token=${token}`);
    this["a"](externalAccountProviderType, token);
};

let C5106c = Java.use("ld1.c$b$c");
C5106c["$init"].implementation = function (idToken) {
    // showStacks()
    // console.log(`C5106c.$init is called: idToken=${idToken}`);
    this["$init"](idToken);
};

let c = Java.use("aa.c");
c["$init"].implementation = function (id, idToken, null1, null2, null3, null4, null5) {
  //  showStacks()
  //  console.log(`c.$init is called: id=${id}, idToken=${idToken}, null=${null}, null=${null}, null=${null}, null=${null}, null=${null}`);
    this["$init"](id, idToken, null1, null2, null3, null4, null5);
};

let Bundle = Java.use("android.os.Bundle");
Bundle["getString"].overload('java.lang.String').implementation = function (idToken) {
    // showStacks()

    let re = this["getString"](idToken);
    // console.log("getString:",idToken);
    // console.log("Bundleresult:",re);
    return re
};
Bundle["putString"].overload('java.lang.String', 'java.lang.String').implementation = function (idToken,value) {
     showStacks()

    let re = this["putString"](idToken,value);
     console.log("putString:",idToken,value);
    // console.log("Bundleresult2:",re);
    return re
};


let H = Java.use("Hg1.H");
H["$init"].overload('[B', 'int', 'int', 'boolean', 'boolean').implementation = function (data, i12, i13, z12, z13) {
  //  console.log(`H.$init is called: data=${data}, i12=${i12}, i13=${i13}, z12=${z12}, z13=${z13}`);
    this["$init"](data, i12, i13, z12, z13);
};
let l = Java.use("org.apache.thrift.l");
l["b"].implementation = function (str, dVar) {
  //  console.log(`l.b is called: str=${str}, dVar=${dVar}`);
    this["b"](str, dVar);
};

let C26823n = Java.use("kotlin.jvm.internal.n");
C26823n["h"].implementation = function (obj, str) {

    if(str.includes("idToken")){
       // showStacks()
        console.log(`C26823n.h is called: obj=${obj}, str=${str}`);
    }

    this["h"](obj, str);
};

let r = Java.use("y8.r");
r["createFromParcel"].implementation = function (parcel) {
   // showStacks()
  //  console.log(`r.createFromParcel is called: parcel=${parcel}`);
    let result = this["createFromParcel"](parcel);
  //  console.log(`r.createFromParcel result=${result}`);
    return result;
};
let b2 = Java.use("H8.b");
b2["f"].implementation = function (i12, parcel) {
    console.log(`b.f is called: i12=${i12}, parcel=${parcel}`);
    let result = this["f"](i12, parcel);
    console.log(`b.f result=${result}`);
    return result;
};

let Parcel = Java.use("android.os.Parcel");
Parcel["readString"].implementation = function () {
    // showStacks()
    let result = this["readString"]();
     console.log(`readString result: str=${result}`);
     
     return result;
 };
Parcel["writeString"].implementation = function (str) {
   // showStacks()
    console.log(`writeString called: str=${str}`);
    let result = this["writeString"](str);
    return result;
};
let Intent = Java.use("android.content.Intent");
Intent["getByteArrayExtra"].implementation = function (key) {
    // showStacks()
    let result = this["getByteArrayExtra"](key);
     console.log(`rgetByteArrayExtra=${result}`,"=  ",key);
     
     return result;
 };

 let a2 = Java.use("Q2.a");
 a2["a"].implementation = function (resultReceiver, intent, str) {
     console.log(`a.a is called: resultReceiver=${resultReceiver}, intent=${intent}, str=${str}`);
     this["a"](resultReceiver, intent, str);
 };
 let i = Java.use("U2.i");
 i["$init"].implementation = function (context) {
     console.log(`i.$init is called: context=${context}`);
     this["$init"](context);
 };


 let a3 = Java.use("R2.j$a");
 a3["$init"].implementation = function (j,handler) {
    showStacks()
     console.log(`a3.$init is called: handler=${handler}`);
     this["$init"](j,handler);
 };


});



