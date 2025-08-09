function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

function byteArrayContains(haystack, needle) {
    if (haystack.length < needle.length) {
        return false;
    }

    for (var i = 0; i <= haystack.length - needle.length; i++) {
        var found = true;
        for (var j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}

Java.perform(function () {
    var Activity = Java.use("java.lang.System");

    var needle = Java.array("byte",[118,101,114,105,102,121,69,97,112,65,99,99,111,117,110,116,70,111,114,82,101,103,105,115,116,114,97,116,105,111,110,24,32,52,107,101])

    // Hook onCreate 方法
    Activity.arraycopy.overload('[B', 'int', '[B', 'int', 'int').implementation = function (arg1,arg2,arg3,arg4,arg5) {


            showStacks()
            console.log(arg1,arg2,arg3,arg4,arg5);
        

        
        // 调用原始方法
        this.arraycopy(arg1,arg2,arg3,arg4,arg5);

    };
});
