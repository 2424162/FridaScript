if (Process.arch !== 'arm64') {
    throw new Error("此脚本仅针对 arm64 架构设备（Process.arch=" + Process.arch + "）");
}

console.log("[*] 开始 Hook RegisterNatives，等待动态注册 JNI 方法……");

// Hook 系统层的 RegisterNatives（导出在 libart.so / libjnigraphics.so 等）
Interceptor.attach(
    Module.findExportByName("libnativehook.so", "_ZN7_JNIEnv15RegisterNativesEP7_jclassPK15JNINativeMethodi"),
    {
        onEnter: function(args) {
            // args[0] = JNIEnv*
            // args[1] = jclass
            // args[2] = JNINativeMethod* （数组基址）
            // args[3] = jint nMethods

            var methodsPtr = args[2];
            var count = args[3].toInt32();
            var pointerSize = Process.pointerSize; // arm64 上是 8

            // 打印当前正在调用 RegisterNatives 的 Class 名称（可选）
            try {
                // 从 jclass 拿到 Java 类名，打印方便定位
                var clazz = Java.vm.getEnv().getObjectClass(args[1]);
                var className = Java.vm.getEnv().getClassName(clazz);
                console.log("[RegisterNatives] clazz = " + className + ", nMethods = " + count);
            } catch (e) {
                // 如果 JVM 环境尚未初始化，可能这里会抛错
                console.log("[RegisterNatives] 无法获取类名: " + e);
            }

            // 遍历 JNINativeMethod 数组
            for (var i = 0; i < count; i++) {
                // 每个 JNINativeMethod 结构体大小是 3 * pointerSize
                // 偏移 0：name (const char*)
                // 偏移 pointerSize：signature (const char*)
                // 偏移 pointerSize*2：fnPtr (void*)
                var entryPtr = methodsPtr.add(i * pointerSize * 3);

                // 读 name
                var namePtr = entryPtr.readPointer();
                var methodName = namePtr.readCString();

                // 读 signature
                var sigPtr = entryPtr.add(pointerSize).readPointer();
                var methodSig = sigPtr.readCString();

                // 读 fnPtr
                var fnPtr = entryPtr.add(pointerSize * 2).readPointer();

                console.log(
                    "[RegisterNatives] #" + i +
                    "  name = " + methodName +
                    ", signature = " + methodSig +
                    ", fnPtr = " + fnPtr
                );

                // 对这个本地方法地址再做一次 Hook（示例：只打印进入和返回）
                (function(name, sig, addr) {
                    Interceptor.attach(addr, {
                        onEnter: function(args) {
                            console.log("    → Enter 本地方法: " + name + "  签名: " + sig);
                            // 如果你想打印参数，需要根据签名自行处理 args[x]
                        },
                        onLeave: function(retval) {
                            console.log("    ← Leave 本地方法: " + name + "  返回值: " + retval);
                        }
                    });
                })(methodName, methodSig, fnPtr);
            }
        }
    }
);

// 为了确保 Java 层能够被访问（拿到 ClassName），在 JavaRuntime 准备好后再打印
Java.perform(function() {
    console.log("[*] Java 环境就绪，Hook RegisterNatives 成功。");
});
