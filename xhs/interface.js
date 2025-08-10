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


Java.perform(function () {
    var RealCall = null;
    try {
        RealCall = Java.use("okhttp3.RealCall");
    } catch (e) {
        console.log("[-] okhttp3.RealCall not found");
        return;
    }

    // 同步请求 execute() -> 无参
    RealCall.execute.overload().implementation = function () {
        var request = this.request();
        showRequest(request);
        var response = this.execute();
        showResponse(response);
        return response;
    };

    // 异步请求 enqueue(Callback)
    RealCall.enqueue.overload('okhttp3.Callback').implementation = function (callback) {
        var request = this.request();
        showRequest(request);

        var newCallback = Java.registerClass({
            name: 'okhttp3.CallbackWrapper',
            implements: [Java.use('okhttp3.Callback')],
            methods: {
                onFailure: function (call, e) {
                    console.log("[OkHttp3 onFailure] " + e);
                    callback.onFailure(call, e);
                },
                onResponse: function (call, response) {
                    showResponse(response);
                    callback.onResponse(call, response);
                }
            }
        }).$new();
        return this.enqueue(newCallback);
    };

    function showRequest(request) {
        try {
            console.log("\n===== OkHttp3 Request =====");
            console.log("URL: " + request.url());
            console.log("Method: " + request.method());

            // 打印 Headers
            var headers = request.headers();
            var headerNames = headers.names().toArray();
            for (var i in headerNames) {
                var name = headerNames[i];
                console.log(name + ": " + headers.get(name));
            }

            // 打印 Body
            var body = request.body();
            if (body) {
                try {
                    var Buffer = Java.use("okio.Buffer");
                    var buffer = Buffer.$new();
                    body.writeTo(buffer);
                    var bodyStr = buffer.readUtf8();
                    console.log("Body: " + bodyStr);
                } catch (e) {
                    console.log("Body: [error reading body] " + e);
                }
            }
            console.log("==========================\n");
        } catch (e) {
            console.log("[showRequest error] " + e);
        }
    }

    function showResponse(response) {
        try {
            console.log("\n===== OkHttp3 Response =====");
            console.log("Code: " + response.code());
            console.log("Message: " + response.message());

            var headers = response.headers();
            var headerNames = headers.names().toArray();
            for (var i in headerNames) {
                var name = headerNames[i];
                console.log(name + ": " + headers.get(name));
            }

            // 打印 Body（clone 一份，不影响业务读取）
            var responseBody = response.body();
            if (responseBody) {
                var source = responseBody.source();
                source.request(java.lang.Long.MAX_VALUE);
                var buffer = source.buffer().clone();
                var bodyStr = buffer.readUtf8();
                console.log("Body: " + bodyStr);
            }
            console.log("===========================\n");
        } catch (e) {
            console.log("[showResponse error] " + e);
        }
    }
});
