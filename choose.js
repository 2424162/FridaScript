
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


function printFields(obj) {
    var clazz = obj.getClass();
    console.log("类名: " + clazz.getName());

    var fields = clazz.getDeclaredFields();
    fields.forEach(function (field) {
        
        field.setAccessible(true);  // 允许访问私有字段
        var fieldName = field.getName();
        var fieldValue = field.get(obj);
      // console.log(fieldName + " = " + fieldValue);
        if(fieldName == "a"){
            var fieldValue2 = Java.array('byte', fieldValue);
            var byte_ja = JSON.stringify(fieldValue2);
            var str = Java.use("java.lang.String").$new(fieldValue2 ,"UTF-8");
            console.log(byte_ja)
            console.log(str)
        }
    });
}



Java.perform(function () {
    Java.choose("ghja", {
        onMatch: function (instance) {
            console.log("[*] 发现实例: " + instance);
            printFields(instance)
            // 可以直接操作实例的方法
          //  console.log("调用方法: " + instance.someMethod());
        },
        onComplete: function () {
            console.log("[*] 实例查找完成！");
            
        }
    });

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
});