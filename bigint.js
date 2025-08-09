

function printUnicodeInfo(str) {
    for (let ch of str) {
        const code = ch.codePointAt(0);
        console.log(`字符: ${ch}  -> Unicode: U+${code.toString(16).toUpperCase().padStart(4, '0')} (${code})`);
    }
}

Java.perform(function () {
    var BigInteger = Java.use("java.math.BigInteger");

    // Hook 无参的 toString()
    BigInteger.toString.overload().implementation = function () {
        var result = this.toString();
        console.log("[BigInteger] toString() 被调用，值 = " + result);
        return result;
    };


    let C38278d = Java.use("we.d");
    C38278d["invoke"].implementation = function (str, str2) {
        console.log(`C38278d.invoke is called: str=${str}, str2=${str2}`);
        let result = this["invoke"](str, str2);
        console.log(`C38278d.invoke result=${result}`);
        let o = Java.use("NV0.o");
        let big = Java.cast(result,o)
        let f63856a = big.a.value;
        let f63856b = big.b.value;
        console.log("o0.a"+f63856a);
        console.log("o0.b:"+f63856b);
        return result;
    };

    // Hook 带进制参数的 toString(int radix)
    BigInteger.toString.overload('int').implementation = function (radix) {
        var result = this.toString(radix);
        console.log("[BigInteger] toString(" + radix + ") 被调用，值 = " + result);
        return result;
    };
    BigInteger.$init.overload('[B').implementation = function (bytes) {
        var hex = '';
        for (var i = 0; i < bytes.length; i++) {
            hex += ('00' + (bytes[i] & 0xff).toString(16)).slice(-2);
        }
        console.log("init:"+bytes)
      // console.log('[*] BigInteger(byte[]) 构造: 0x' + hex);
        return this.$init(bytes);
    };

    BigInteger.modPow.implementation = function (exponent, m) {
        const base = this.toString();              // this = a
        const exp = exponent.toString();           // b
        const mod = m.toString();                  // m

        const result = this.modPow(exponent, m);

        console.log("=== BigInteger.modPow 被调用 ===");
        console.log("底数 a     = " + base);
        console.log("指数 b     = " + exp);
        console.log("模数 m     = " + mod);
        console.log("结果 a^b%m = " + result.toString());
        console.log("===============================");

        return result;
    };

    var StringBuilder = Java.use("java.lang.StringBuilder");
    let C26638z = Java.use("hl1.z");
    C26638z["f0"].implementation = function (iterable, buffer, separator, prefix, postfix, i12, truncated, interfaceC37674l) {
        console.log(`C26638z.f0 is called: iterable=${iterable}, buffer=${buffer}, separator=${separator}, prefix=${prefix}, postfix=${postfix}, i12=${i12}, truncated=${truncated}, interfaceC37674l=${interfaceC37674l}`);
        this["f0"](iterable, buffer, separator, prefix, postfix, i12, truncated, interfaceC37674l);
        console.log("befo"+bf)

        var iterator = iterable.iterator();
        while (iterator.hasNext()) {
            var item = iterator.next();
            console.log("Item: " + item);
            printUnicodeInfo(item)
        }
        var bf = Java.cast(buffer,StringBuilder)
        console.log("after"+bf)
    };


C26638z["i0"].implementation = function (iterable, str, str2, str3, interfaceC37674l, i12) {
    console.log(`C26638z.i0 is called: iterable=${iterable}, str=${str}, str2=${str2}, str3=${str3}, interfaceC37674l=${interfaceC37674l}, i12=${i12}`);
    let result = this["i0"](iterable, str, str2, str3, interfaceC37674l, i12);
    console.log(`C26638z.i0 result=${result}`);
    printUnicodeInfo(result)
    return result;
};
});