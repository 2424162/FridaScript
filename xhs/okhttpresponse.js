
console.log("HOOK");
Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
    onEnter: function(args) {
        var soName = ptr(args[0]).readCString();
        console.log(soName);
        if(soName.includes("libmsaoaidsec.so")) {
            console.log("Blocking:", soName);
            args[0] = ptr(0);
        }
    }
});

function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function() {
    var RealCall = Java.use('okhttp3.RealCall');
    var Callback = Java.use('okhttp3.Callback');
    var Response = Java.use('okhttp3.Response');
    var ResponseBody = Java.use('okhttp3.ResponseBody');
    var MediaType = Java.use('okhttp3.MediaType');

    // Hook RealCall.execute() 同步请求
    RealCall.execute.implementation = function() {
        var response = this.execute();  // 执行原始请求
        try {
           // showStacks()
            // 获取 ResponseBody
            var body = response.body();
            var bodyStr = body.string();  // 读取返回内容
         //   var url = response.request().url().toString();
            console.log("[RealCall.execute] URL:", response.request().url().toString());
            console.log("[RealCall.execute] Response body:", bodyStr);

            // 重新构造 ResponseBody
            var newBody = ResponseBody.create(body.contentType(), bodyStr);
            // 返回新的 Response 对象
            return response.newBuilder().body(newBody).build();
        } catch (e) {
            console.error("Error in RealCall.execute hook:", e);
        }
        return response;
    };

    // Hook Callback.onResponse() 异步请求
    Callback.onResponse.implementation = function(call, response) {
        try {
            // 获取 ResponseBody
            var body = response.body();
            var bodyStr = body.string();  // 读取返回内容
            console.log("[Callback.onResponse] URL:", response.request().url().toString());
            console.log("[Callback.onResponse] Response body:", bodyStr);

            // 重新构造 ResponseBody
            var newBody = ResponseBody.create(body.contentType(), bodyStr);
            // 创建新的 Response 对象
            var newResponse = response.newBuilder().body(newBody).build();
            // 返回新的 Response 对象
            return this.onResponse(call, newResponse);
        } catch (e) {
            console.error("Error in Callback.onResponse hook:", e);
            // 如果出错，继续返回原有的 Response
            return this.onResponse(call, response);
        }
    };


});