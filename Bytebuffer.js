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

Java.perform(function() {
    var ByteBuffer = Java.use('java.nio.ByteBuffer');
    
    // Hook ByteBuffer 的 get 方法
    ByteBuffer.put.overload('java.nio.ByteBuffer').implementation = function(byteBuffer) {
        console.log("callarryput:")
        var result = this.put(byteBuffer);
        var bytesArray = byteBuffer.array()
       // console.log("arryput:",bytesArray.length)
        let str2 = bytesToString(bytesArray)
        if(str2.includes("tink")){
            console.log(bytesToString(bytesArray))
        }
        
        

        return result;
    };
    
    // Hook ByteBuffer 的 array() 方法
    ByteBuffer.array.overload().implementation = function() {
        var byteArray = this.array();
        // console.log(byteArray)
         console.log("array:",byteArray.length,bytesToString(byteArray))
        return byteArray;
    };



    var System = Java.use("java.lang.System");
    // Hook onCreate 方法
    System.arraycopy.overload('[B', 'int', '[B', 'int', 'int').implementation = function (arg1,arg2,arg3,arg4,arg5) {



           // console.log("arraycopy:",arg1,arg2,arg3,arg4,arg5);
            let str1 = bytesToString(arg1)
            let str2 = bytesToString(arg3)
            if(str1.includes("tink")||str2.includes("tink")){

                console.log("arraycopy:",arg1,arg2,"++++++++++",arg3,arg4,arg5,);
                console.log("org:",str1);
                console.log("to:",str2);
                showStacks()
                console.log("---------")

            }

        
        // 调用原始方法
        this.arraycopy(arg1,arg2,arg3,arg4,arg5);

    };

    let ByteArrayOutputStream = Java.use("java.io.ByteArrayOutputStream");
ByteArrayOutputStream["write"].overload('[B', 'int', 'int').implementation = function (fhnnVar,in1,int2) {
 //  showStacks()
  //  console.log(`ByteArrayOutputStreamis called: fhnnVar=${fhnnVar}`,in1,"   ",int2);
    let result = this["write"](fhnnVar,in1,int2);

 //   console.log(`ByteArrayOutputStream result=${result}`);
    
    let str1 = bytesToString(fhnnVar)
    if(str1.includes("tink")){
        console.log(`ByteArrayOutputStreamis called: fhnnVar=${fhnnVar}`," +++++   "+in1,"   ",int2);
        console.log("write:",str1)
        console.log("+=============")
    }
    
        return result;
};
});