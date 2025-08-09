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
//     let frac = Java.use("frac");
//     frac["$init"].implementation = function (bigInteger) {
//         //showStacks()
//         console.log(`frac.$init is called: bigInteger=${bigInteger}`);
//         this["$init"](bigInteger);
//     };

//     let fqhc = Java.use("fqhc");
// fqhc["a"].implementation = function (bigInteger) {
//     console.log(`fqhc.a is called: bigInteger=${bigInteger}`);
//     showStacks()
//     let result = this["a"](bigInteger);
//     console.log(`fqhc.a result=${result}`);
//     return result;
// };


let xwz = Java.use("xwz");
xwz["f"].implementation = function (str, bArr) {
    console.log(`xwz.f is called: str=${str}, bArr=${bArr}`);
    let result = this["f"](str, bArr);
    console.log(`xwz.f result=${result}`);
    return result;
};
});