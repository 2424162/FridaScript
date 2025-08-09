Java.perform(function () {
    const DexClassLoader = Java.use("dalvik.system.DexClassLoader");

    DexClassLoader.$init.overload(
        'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.ClassLoader'
    ).implementation = function (dexPath, optDir, libPath, parent) {
        console.log("[+] DexClassLoader init: " + dexPath);

        // 在这里读取 dexPath 对应文件内容保存到本地
        dumpDexFile(dexPath);

        return this.$init(dexPath, optDir, libPath, parent);
    };

    function dumpDexFile(dexPath) {
        try {
            var FileInputStream = Java.use("java.io.FileInputStream");
            var FileOutputStream = Java.use("java.io.FileOutputStream");
            var File = Java.use("java.io.File");

            var inputFile = File.$new(dexPath);
            var inputStream = FileInputStream.$new(inputFile);

            var outputFile = File.$new("/sdcard/dump.dex");
            var outputStream = FileOutputStream.$new(outputFile);

            var buffer = Java.array('byte', Array(1024).fill(0));
            var length;

            while ((length = inputStream.read(buffer)) > 0) {
                outputStream.write(buffer, 0, length);
            }

            inputStream.close();
            outputStream.close();

            console.log("[+] Dex file dumped to /sdcard/dump.dex");
        } catch (e) {
            console.log("[-] Dex dump failed:", e);
        }
    }
});
