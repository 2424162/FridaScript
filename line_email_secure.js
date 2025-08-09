function bytesToString(arr) {
    var str = '';
    arr = new Uint8Array(arr);
    for (var i in arr) {
        str += String.fromCharCode(arr[i]);
    }
  //  console.log(str)

    return str;
}
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

console.log("start")
Java.perform(function () {


    let BigInteger1 = Java.use("java.math.BigInteger")
    BigInteger1.$init.overload("[B").implement = function (barr){

        let result = this.$init(barr);
        console.log("bigInteger1:"+result);
        
        return result

    }
    BigInteger1.toString.implement = function(int1){
        let result = this.toString(int1)
        if(int1 == 16){
            console.log("biginter.toString:"+result)
        }
        return result;
    }


    let b = Java.use("On1.b");
    b["p"].implementation = function () {
        let result = this["p"]();
        console.log(`b.p result=${result}`);
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

    let BigInteger = Java.use("java.math.BigInteger")
    BigInteger.$init.overload("[B").implement = function (barr){

        let result = this.$init(barr);
        console.log("bigInteger1:"+result);
        
        return result

    }
    BigInteger.toString.implement = function(int1){
        let result = this.toString(int1)
        if(int1 == 16){
            console.log("biginter.toString:"+result)
        }
        return result;
    }



    let C26638z = Java.use("hl1.z");
    C26638z["f0"].implementation = function (iterable, buffer, separator, prefix, postfix, i12, truncated, interfaceC37674l) {
        console.log(`C26638z.f0 is called: iterable=${iterable}, buffer=${buffer}, separator=${separator}, prefix=${prefix}, postfix=${postfix}, i12=${i12}, truncated=${truncated}, interfaceC37674l=${interfaceC37674l}`);
        this["f0"](iterable, buffer, separator, prefix, postfix, i12, truncated, interfaceC37674l);
        console.log("befo"+bf)

        var iterator = iterable.iterator();
        while (iterator.hasNext()) {
            var item = iterator.next();
            console.log("Item: " + item);
        }
        var bf = Java.cast(buffer,StringBuilder)
        console.log("after"+bf)
    };


});