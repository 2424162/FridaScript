function bytesToString(arr) {
    var str = '';
    arr = new Uint8Array(arr);
    for (var i in arr) {
        str += String.fromCharCode(arr[i]);
    }
  //  console.log(str)

    return str;
}
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}
console.log("start")

Java.perform(function () {

    var System = Java.use("java.lang.System");
    // Hook onCreate 方法
    let C26638z = Java.use("hl1.z");
    C26638z["i0"].implementation = function (iterable, str, str2, str3, interfaceC37674l, i12) {
        console.log(`C26638z.i0 is called: iterable=${iterable}, str=${str}, str2=${str2}, str3=${str3}, interfaceC37674l=${interfaceC37674l}, i12=${i12}`);
        let result = this["i0"](iterable, str, str2, str3, interfaceC37674l, i12);
        console.log(`C26638z.i0 result=${result}`);
        return result;
    };


    var StringBuilder = Java.use("java.lang.StringBuilder");
    var StringBuffer = Java.use("java.lang.StringBuffer");
    // Hook append 方法
    StringBuilder.append.overload('java.lang.CharSequence').implementation = function (str) {
        console.log("StringBuilder append:CharSequence " + str);
        return this.append(str);  // 调用原始方法
    };
    StringBuffer.append.overload('java.lang.CharSequence').implementation = function (str) {
        console.log("StringBuffer append:CharSequence " + str);
        return this.append(str);  // 调用原始方法
    };
    StringBuilder.append.overload('[C').implementation = function (str) {
        console.log("StringBuilder append: " + str);
        return this.append(str);  // 调用原始方法
    };
    StringBuilder.append.overload('char').implementation = function (str) {
        console.log("StringBuilder append char: " + str);
        return this.append(str);  // 调用原始方法
    };

    // Hook toString 方法
    // StringBuilder.toString.implementation = function () {
    //     var result = this.toString();
    //     console.log("StringBuilder toString: " + result);
    //     return result;
    // };
    let appendable = Java.use("java.lang.Appendable");
    C26638z["f0"].implementation = function (iterable, buffer, separator, prefix, postfix, i12, truncated, interfaceC37674l) {
        console.log(`C26638z.f0 is called: iterable=${iterable}, buffer=${buffer}, separator=${separator}, prefix=${prefix}, postfix=${postfix}, i12=${i12}, truncated=${truncated}, interfaceC37674l=${interfaceC37674l}`);
        this["f0"](iterable, buffer, separator, prefix, postfix, i12, truncated, interfaceC37674l);
        console.log("befo"+bf)

        var iterator = iterable.iterator();
        while (iterator.hasNext()) {
            var item = iterator.next();
            console.log("Item: " + item);
        }
        var bf = Java.cast(buffer,StringBuilder)
        console.log("after"+bf)
    };
    appendable.append.overload('java.lang.CharSequence').implementation = function (str) {
        console.log("appendable append:CharSequence " + str);
        return this.append(str);  // 调用原始方法
    };
    appendable.append.overload('char').implementation = function (str) {
        console.log("StringBuilder append char: " + str);
        return this.append(str);  // 调用原始方法
    };

    let C10391v = Java.use("Hh0.v");
    C10391v["invoke"].implementation = function (obj) {
        console.log(`C10391v.invoke is called: obj=${obj}`);
        let result = this["invoke"](obj);
        console.log(`C10391v.invoke result=${result}`);
        return result;
    };


    let C38260e = Java.use("we.e");
    C38260e["$init"].implementation = function (pVar, a72, str, str2, continuation) {
        showStacks()
        console.log(`C38260e.$init is called: pVar=${pVar}, a72=${a72}, str=${str}, str2=${str2}, continuation=${continuation}`);
        this["$init"](pVar, a72, str, str2, continuation);
    };

    let a = Java.use("gl1.A7$a");
    a["a"].implementation = function (gVar, dVar) {
        console.log(`a.a is called: gVar=${gVar}, dVar=${dVar}`);
        this["a"](gVar, dVar);
    };


//     let b = Java.use("On1.b");
// b["p"].implementation = function () {
//     let result = this["p"]();
//     console.log(`b.p result=${result}`);
//     return result;
// };

var String = Java.use("java.lang.String");

// Hook String(byte[] bArr, Charset charset) 构造方法
String.$init.overload('[B', 'java.nio.charset.Charset').implementation = function (bArr, charset) {
    console.log("[*] byte[]: " + bArr);
    console.log("[*] Charset: " + charset);

    // 你可以在这里修改传入的参数
    // 比如你可以替换字符集为另一个类型，或者修改字节数组

    // 调用原始构造函数
    var result = this.$init(bArr, charset);

    // 返回构造的 String 对象
    return result;
};

String.$init.overload('[B','int',"int", 'java.nio.charset.Charset').implementation = function (bArr,in1,in2, charset) {
    console.log("[*] byte[]2: " + bArr);
    console.log("[*] Charset2: " + charset);

    // 你可以在这里修改传入的参数
    // 比如你可以替换字符集为另一个类型，或者修改字节数组

    // 调用原始构造函数
    var result = this.$init(bArr,in1,in2 ,charset);

    // 返回构造的 String 对象
    return result;
};

let StringFactory = Java.use("java.lang.StringFactory");
StringFactory["newStringFromBytes"].overload('[B', 'java.nio.charset.Charset').implementation = function (a,b) {
    console.log(`newStringFromBytes`+a+b);
    let result = this["newStringFromBytes"](a,b);
    console.log(`d.c result=${result}`);
    return result;
};

let C13262b = Java.use("Pi.b");
C13262b["f"].implementation = function (i12, buf) {
    console.log(`C13262b.f is called: i12=${i12}, buf=${buf}`);
    let result = this["f"](i12, buf);
    console.log(buf)
 //   console.log(`C13262b.f result=${result}`);
    return result;
};


let F = Java.use("Cn1.F");
F["read"].overload('[B', 'int', 'int').implementation = function (sink, i12, i13) {
    console.log(`F.read is called: sink=${sink}, i12=${i12}, i13=${i13}`);
    let result = this["read"](sink, i12, i13);
  //  console.log(sink)
   // console.log(`F.read result=${result}`);
    return result;
};


let C26596n = Java.use("hl1.n");
C26596n["d"].implementation = function (bArr, i12, destination, i13, i14) {
    if(i14-i13==12){
        console.log(`C26596n.d is called: bArr=${bArr}, i12=${i12}, destination=${destination}, i13=${i13}, i14=${i14}`);
    }

    this["d"](bArr, i12, destination, i13, i14);
};

let C8630g = Java.use("Cn1.g");
C8630g["read"].overload('[B', 'int', 'int').implementation = function (sink, i12, i13) {
    console.log(`C8630g.read is called: sink=${sink}, i12=${i12}, i13=${i13}`);
    let result = this["read"](sink, i12, i13);
    console.log("g.read:"+sink)
    console.log(`C8630g.read result=${result}`);
    return result;
};


// var System = Java.use("java.lang.System");
// // Hook onCreate 方法
// System.arraycopy.overload('[B', 'int', '[B', 'int', 'int').implementation = function (arg1,arg2,arg3,arg4,arg5) {



//        // console.log("arraycopy:",arg1,arg2,arg3,arg4,arg5);
//        // console.log(arg3.length)
//         if(arg1.length<60&&arg3.length<60){
//             let str1 = bytesToString(arg1)
//             let str2 = bytesToString(arg3)

//            console.log("arraycopy:",arg1,arg2,"++++++++++",arg3,arg4,arg5,);
//             console.log("org:",str1);
//             console.log("to:",str2);
//             console.log("---------")

//         }

    
//     // 调用原始方法
//     this.arraycopy(arg1,arg2,arg3,arg4,arg5);

// };



});