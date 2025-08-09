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


    let BigInteger1 = Java.use("java.lang.String")
    BigInteger1.$init.implement = function (barr){

        let result = this.$init(barr);
        console.log("bigInteger1:"+result);
        
        return result

    }
    BigInteger1.toString.implement = function(int1){
        let result = this.toString(int1)
        console.log("biginter.toString:"+result)
        if(int1 == 16){
            console.log("biginter.toString:"+result)
        }
        return result;
    }




});