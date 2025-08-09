Interceptor.attach(Module.findExportByName(null, 'sub_3B97C'), {
    onEnter: function(args) {
        // 获取第六个参数，即方法名
        var methodName = Memory.readUtf8String(args[5]);  // 第六个参数是方法名（"digest"）
        
        // 判断方法名是否为 "digest"
        if (methodName === "digest") {
            // 获取传入的 v116 地址（指针）
            var v116 = args[2];  // v116 是传入 sub_3B97C 的第三个参数，存储输出结果
            
            // 打印传入的 v116 地址
            console.log("[*] v116 地址:", v116);

            // 假设 v116 是 byte[] 类型，读取它的内容
            var length = Memory.readInt(v116.add(4));  // 偏移 4 字节读取 byte[] 长度
            console.log("[*] v116 长度:", length);

            // 读取并打印 byte[] 内容
            var byteArray = Memory.readByteArray(v116, length);
            var hexStr = '';
            for (var i = 0; i < length; i++) {
                hexStr += ('0' + (byteArray[i] & 0xFF).toString(16)).slice(-2) + ' ';
            }
            console.log("[*] v116 内容（十六进制）:", hexStr);
        }
    },
    onLeave: function(retval) {
        // 在函数执行完后，打印 v116 的最终值（如果需要）
        // 这里只是附加了额外的操作，便于调试
        var methodName = Memory.readUtf8String(args[5]);
        if (methodName === "digest") {
            console.log("[*] 函数返回值:", retval);
        }
    }
});
