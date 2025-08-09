try {
    Interceptor.attach(Module.getExportByName(null, "bcmp"), {
        onEnter: function (args) {
            this.ptr1 = args[0];
            this.ptr2 = args[1];
            this.size = args[2].toInt32();

            console.log("[*] bcmp 被调用 长度:", this.size);
            
            const buf1 = Memory.readByteArray(this.ptr1, this.size);
            const buf2 = Memory.readByteArray(this.ptr2, this.size);

            function toHex(buf) {
                return Array.from(new Uint8Array(buf))
                    .map(b => ('0' + b.toString(16)).slice(-2)).join(' ');
            }

            console.log("    参数1:", toHex(buf1));
            console.log("    参数2:", toHex(buf2));
        },
        onLeave: function (retval) {
            console.log("    比较结果:", retval);
        }
    });
} catch (e) {
    console.log("[!] bcmp 不存在于当前模块中，忽略。");
}


Interceptor.attach(Module.getExportByName(null, "memcmp"), {
    onEnter: function (args) {
        this.ptr1 = args[0];
        this.ptr2 = args[1];
        this.size = args[2].toInt32();

        if(this.size==16){

        console.log("    长度:", this.size);
        console.log("[*] memcmp 被调用");

        const buf1 = Memory.readByteArray(this.ptr1, this.size);
        const buf2 = Memory.readByteArray(this.ptr2, this.size);

        // 输出 hex 字符串
        function toHex(buf) {
            return Array.from(new Uint8Array(buf))
                .map(b => ('0' + b.toString(16)).slice(-2))
                .join('');
        }

        console.log("    参数1:", toHex(buf1));
        console.log("    参数2:", toHex(buf2));
    }
    },
    onLeave: function (retval) {
    //     console.log("    比较结果:", retval);
    //     if (retval.toInt32() == 0) {
    //         console.log("    ✅ 匹配相等");
    //     } else {
    //         console.log("    ❌ 不相等");
    //     }
    //     console.log("-------------------------------------");
     }
});

