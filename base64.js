function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}


Java.perform(function () {
    console.log("=== Base64 Hook Script Started ===");

    // --------- android.util.Base64 -------------
    try {
        var Base64Util = Java.use("android.util.Base64");

        // encodeToString
        Base64Util.encodeToString.overload('[B', 'int').implementation = function (data, flags) {
            var inputBytes = Java.array('byte', data);
            showStacks();
            console.log("\n[android.util.Base64] encodeToString()");
            console.log("  Input (bytes): " + inputBytes);

            var result = this.encodeToString(data, flags);
            console.log("  Encoded (string): " + result);

            return result;
        };

        // decode
        Base64Util.decode.overload('java.lang.String', 'int').implementation = function (input, flags) {
            console.log("\n[android.util.Base64] decode()");
            console.log("  Input (string): " + input);

            var result = this.decode(input, flags);
            console.log("  Decoded (bytes): " + Java.array('byte', result));

            return result;
        };

        console.log("Hooked android.util.Base64 ✅");
    } catch (e) {
        console.log("android.util.Base64 not found: " + e);
    }


    // --------- java.util.Base64 -------------
    try {
        var Base64Encoder = Java.use("java.util.Base64$Encoder");
        var Base64Decoder = Java.use("java.util.Base64$Decoder");

        // encodeToString
        Base64Encoder.encodeToString.overload('[B').implementation = function (data) {
            var inputBytes = Java.array('byte', data);
            console.log("\n[java.util.Base64] encodeToString()");
            console.log("  Input (bytes): " + inputBytes);

            var result = this.encodeToString(data);
            console.log("  Encoded (string): " + result);

            return result;
        };

        // decode
        Base64Decoder.decode.overload('java.lang.String').implementation = function (input) {
            console.log("\n[java.util.Base64] decode()");
            console.log("  Input (string): " + input);

            var result = this.decode(input);
            console.log("  Decoded (bytes): " + Java.array('byte', result));

            return result;
        };

        console.log("Hooked java.util.Base64 ✅");
    } catch (e) {
        console.log("java.util.Base64 not found: " + e);
    }

    console.log("=== Base64 Hook Script Loaded ===");
});
