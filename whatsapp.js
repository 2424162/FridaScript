Java.perform(function () {
    var HttpURLConnectionImpl = Java.use("com.android.okhttp.internal.huc.HttpURLConnectionImpl");

    HttpURLConnectionImpl.connect.implementation = function () {
        try {
            var url = this.getURL();
            var method = this.getRequestMethod();
            console.log("\n[HttpURLConnectionImpl] connect() URL: " + url);
            console.log("[HttpURLConnectionImpl] Method: " + method);

            // 在连接之前打印 header
            var headers = this.getRequestProperties();
            if (headers) {
                var iter = headers.keySet().iterator();
                while (iter.hasNext()) {
                    var key = iter.next();
                    var values = headers.get(key);
                    console.log("   " + key + " = " + values);
                }
            }
        } catch (e) {
            console.log("[HttpURLConnectionImpl] Error reading headers: " + e);
        }
        return this.connect();
    };

    HttpURLConnectionImpl.getInputStream.implementation = function () {
        var url = this.getURL();
        console.log("[HttpURLConnectionImpl] getInputStream() URL: " + url);

        var inputStream = this.getInputStream();

        // 如果要读取响应体，建议用 InputStream.available() + read()
        return inputStream;
    };
});
