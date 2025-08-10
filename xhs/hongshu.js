

console.log("kaishi");

function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}
Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
    onEnter: function(args) {
        var soName = ptr(args[0]).readCString();
        console.log(soName);
        if(soName.includes("libmsaoaidsec.so")) {
            console.log("Blocking:", soName);
            args[0] = ptr(0);
        }
    }
});
Java.perform(function () {

    

    // 打印调用堆栈的辅助函数
    function printStackTrace() {
        const Exception = Java.use("java.lang.Exception");
        const Log = Java.use("android.util.Log");
        const stack = Log.getStackTraceString(Exception.$new());
        console.log('    Stack Trace:\n' + stack);
    }

    var old_string = null;
    var old_stringbuilder = null;
    // Hook java.lang.String.length()
    const StringClass = Java.use('java.lang.String');
    StringClass.length.implementation = function () {
        const result = this.length();
        let this_o = this.toString()
                if(result< 5){
            return result;
        }
        if(old_string != this_o){
            console.log('    Value: ' + this_o+'    Length: ' + result);
        }
        old_string = this_o;
        
       // console.log('\n[+] java.lang.String.length() called');


        return result; // 可改为 return 999;
    };

    // Hook java.lang.StringBuilder.length()
    const StringBuilderClass = Java.use('java.lang.StringBuilder');
    StringBuilderClass.length.implementation = function () {
        const result = this.length();

        let this_b = this.toString()
        if(result< 5){
            return result;
        }
        if(old_stringbuilder != this_b){
            console.log('    Value: ' + this_b+'    Length: ' + result);
        }
        old_stringbuilder = this_b;
        

       // console.log('\n[+] java.lang.StringBuilder.length() called');
        console.log('    Content: ' + this.toString()+'    Length: ' + result);

        return result;
    };




});
