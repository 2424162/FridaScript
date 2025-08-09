function bytesToString(arr) {
    var str = '';
    arr = new Uint8Array(arr);
    for (var i in arr) {
        str += String.fromCharCode(arr[i]);
    }
    console.log(str)

    return str;
}
var tag = " update data";
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

var ByteString = Java.use("com.android.okhttp.okio.ByteString");
//输出base64格式数据
function toBase64(tag, data) {
    console.log(tag + " Base64: ", ByteString.of(data).base64());
}
//输出hex格式数据
function toHex(tag, data) {
    console.log(tag + " Hex: ", ByteString.of(data).hex());
}
//输出10格式数据
function toUtf8(tag, data) {
    console.log(tag + " Utf8: ", ByteString.of(data).utf8());
}
function printFields(obj) {
    var clazz = obj.getClass();
//    console.log("类名: " + clazz.getName());

    var fields = clazz.getDeclaredFields();
    fields.forEach(function (field) {
        
        field.setAccessible(true);  // 允许访问私有字段
        var fieldName = field.getName();
        var fieldValue = field.get(obj);
      // console.log(fieldName + " = " + fieldValue);
        if(fieldName == "a"){
            var fieldValue2 = Java.array('byte', fieldValue);
            var byte_ja = JSON.stringify(fieldValue2);
            var str = Java.use("java.lang.String").$new(fieldValue2 ,"UTF-8");
            console.log(byte_ja)
            console.log(str)
            console.log("++++++++-------====++++++")
        }
    });
}
console.log("start")
Java.perform(function() {

    var signature = Java.use("java.security.Signature");

    signature.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (data, start, length) {
        console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
        console.log("Signature.update('str str') is called!"+data+" ++ "+start);
       

       // showStacks();

        return this.getInstance(data, start, length);
    }
    signature.getInstance.overload('java.lang.String').implementation = function (data) {
        console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
        console.log("Signature.update('[str') is called!"+data);
       

      //  showStacks();

        return this.getInstance(data);
    }
        signature.update.overload('[B').implementation = function (data) {
        console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
        console.log("Signature.update('java.nio.byte[]') is called!");
        toUtf8(tag, data);
        showStacks();
        console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");
        return this.update(data);
    }

    // signature.getInstance.overload('java.lang.String', 'java.security.Provider').implementation = function (data,pro) {
    //     console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    //     console.log("Signature.update('str ,ppro') is called!"+data+" ++"+pro);
       

    //     showStacks();

    //     return this.getInstance(data,pro);
    // }


    // let xws = Java.use("xws");
    // xws["a"].implementation = function (fpefVar, str) {
    //     console.log(`xws.a is called: fpefVar=${fpefVar}, str=${str}`);
    //     let result = this["a"](fpefVar, str);
    //     console.log(`xws.a result=${result}`);
    //     return result;
    // };
    let fqgr = Java.use("fqxz");
// fqgr["a"].implementation = function (null1, null2) {
//     console.log(`fqgr.a is called: null=${null1}, null++++++++++=${null2}`);
//     let result = this["a"](null1, null2);
//     var arg = bytesToString(null1)
//     console.log(arg)
//     console.log(`fqgr.a result=${result}`);
//     var res = bytesToString(result)
//     console.log(res)
//     console.log("================================================================")
//     return result;
// };

let xxb = Java.use("xxb");
xxb["a"].implementation = function (fpvhVar, str) {

    let result = this["a"](fpvhVar, str);
    if(result.includes("eyJh")){
        console.log(`xxb.a is called: fpvhVar=${fpvhVar}, str=${str}`);
        console.log(`xxb.a result=${result}`);
    }

    return result;
};

let fqza = Java.use("fqza");
fqza["b"].implementation = function (str, bArr, bArr2, bArr3, i) {
    console.log(`fqza.b is called: str=${str}, bArr=${bArr}, bArr2=${bArr2}, bArr3=${bArr3}, i=${i}`);
    let result = this["b"](str, bArr, bArr2, bArr3, i);
    bytesToString(bArr)
    bytesToString(bArr2)
    bytesToString(bArr3)
    console.log(`fqza.b result=${result}`);
    return result;
};


});