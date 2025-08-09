
console.log("kaishi");

function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {
    // 获取 PackageManager 类
    var PackageManager = Java.use('android.content.pm.PackageManager');
    
    // hook resolveActivity 方法
    PackageManager.resolveActivity.overload('android.content.Intent', 'int').implementation = function (intent, flags) {
        console.log('resolveActivity被调用，Intent: ' + intent.toString());

        // 在这里你可以修改 intent 或者其他参数，或打印更多的细节
        console.log('Intent Data: ' + intent.getData());

        // 调用原始的 resolveActivity 方法
        var result = this.resolveActivity(intent, flags);
        
        // 在这里可以修改返回的 ResolveInfo 对象
        console.log('原始返回: ' + result);

        // 返回修改后的 result，或者返回原始值
        return result;
    };

    let AnonymousClass022 = Java.use("X.022");
AnonymousClass022["A0u"].implementation = function (context, i) {
    // console.log(`AnonymousClass022.A0u is called: context=${context}, i=${i}`);
    //  let string = this.A0u(context,i);
    //  console.log('zfc:',string)
    let result = "1language"
    console.log(`AnonymousClass022.A0u result=${result}`);
    return result;
};


// let AnonymousClass097 = Java.use("X.097");
// AnonymousClass097["A0p"].implementation = function (context, i) {
//     console.log(`AnonymousClass097.A0p is called: context=${context}, i=${i}`);
//     let result = this["A0p"](context, i);
//     console.log(`AnonymousClass097.A0p result=${result}`);
//     return result;
// };
//     var ContextClass = Java.use("android.content.Context");

//     ContextClass.getString.overload('int').implementation = function (resId) {
//         var result = this.getString(resId);
//         console.log("[*] getString called with resId:", resId, "=>", result);
//         return result;
//     };
});