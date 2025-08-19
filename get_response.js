Java.perform(function () {
    // 获取 HttpURLConnectionImpl 类
    var HttpURLConnectionImpl = Java.use("com.android.okhttp.internal.huc.HttpURLConnectionImpl");

    // Hook getResponse 方法
    HttpURLConnectionImpl.getResponse.implementation = function () {
        console.log("[HttpURLConnectionImpl] Called getResponse()");
        console.log("[HttpURLConnectionImpl] URL: " + this.getURL());
        console.log("[HttpURLConnectionImpl] Method: " + this.getRequestMethod());

        // 打印请求头
        var requestHeaders = this.getRequestProperties();
        var iter = requestHeaders.keySet().iterator();
        while (iter.hasNext()) {
            var key = iter.next();
            var values = requestHeaders.get(key);
            console.log("[HttpURLConnectionImpl] Request Header - " + key + ": " + values);
        }

        // 调用原始方法获取响应
        var response = this.getResponse();

        // 打印响应状态码（如果有）
        var responseCode = this.getResponseCode();
        console.log("[HttpURLConnectionImpl] Response Code: " + responseCode);

        return response;  // 返回响应
    };

    // Hook getInputStream 方法
    HttpURLConnectionImpl.getInputStream.implementation = function () {
        console.log("[HttpURLConnectionImpl] Called getInputStream()");

        var inputStream = this.getInputStream();

        // 获取响应体内容并打印
        try {
            var BufferedReader = Java.use("java.io.BufferedReader");
            var InputStreamReader = Java.use("java.io.InputStreamReader");
            var StringBuilder = Java.use("java.lang.StringBuilder");

            var reader = BufferedReader.$new(InputStreamReader.$new(inputStream));
            var sb = StringBuilder.$new();
            var line;

            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
            reader.close();

            // 打印解码后的响应内容
            console.log("[HttpURLConnectionImpl] Response Body: " + sb.toString());
        } catch (e) {
            console.log("[HttpURLConnectionImpl] Exception reading response body: " + e);
        }

        return inputStream;  // 返回原始的 InputStream
    };

    console.log("=== Hooking HttpURLConnectionImpl getResponse and getInputStream ===");
});
