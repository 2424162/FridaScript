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



});



