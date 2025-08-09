var moduleName = "libiam.so";
var funcOffset = 0x3b97c;     //   b6b88; // 偏移11
//第二种方式（针对新系统版本） android 8.1 使用该方法
var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
console.log(android_dlopen_ext);
if(android_dlopen_ext != null){
    Interceptor.attach(android_dlopen_ext,{
        onEnter: function(args){
            var soName = args[0].readCString();
            //console.log(soName);
            if(soName.indexOf(moduleName) != -1){
                this.hook = true;
            }
        },
        onLeave: function(retval){
            if(this.hook) {
                dlopentodo();
            };
        }
    });
}



function dlopentodo(){

var baseAddr = Module.findBaseAddress(moduleName);
if (baseAddr === null) {
    console.log("模块未加载: " + moduleName);
} else {
    var funcAddr = baseAddr.add(funcOffset);
    console.log("函数地址: " + funcAddr);

    Interceptor.attach(funcAddr, {
        onEnter: function (args) {
            //return;
            //console.log("进入 native 函数");
            // console.log(Thread.backtrace(this.context, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join("\n"));
        
            const srcStr = Memory.readCString(args[4]); 
            const srcStr2 = Memory.readCString(args[5]); 
   
            this.hook = 0;
            if (srcStr2.indexOf("digest")!= -1){
                         console.log("参数 args[0]: " + args[0],srcStr,srcStr2);

                this.hook = 1;
                console.log("hook:"+this.hook+ args[2]);
                this.addr = args[2]
                
            }
        },
        onLeave: function (retval) {

            //retval.replace(0x119);
           // console.log("函数返回值: " + retval);
            if(this.hook==1){
            console.log(this.addr)
        var v116 = this.addr;  // 假设 retval 是修改后的值
        var length = Memory.readInt(v116.add(4));  // 读取 byte[] 长度
        console.log("[*] v116 长度:", length);

        var byteArray = Memory.readByteArray(v116, length);
        var hexStr = '';
        for (var i = 0; i < length; i++) {
            hexStr += ('0' + (byteArray[i] & 0xFF).toString(16)).slice(-2) + ' ';
        }
        console.log("[*] v116 内容（十六进制）:", hexStr);
    }

            }

        
    });
}
}

