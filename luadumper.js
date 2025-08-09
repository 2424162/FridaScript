var moduleName = "libtolua.so";
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


var adds = Module.findExportByName("libtolua.so", "luaL_loadbuffer");
    var base = Module.findBaseAddress("libtolua.so");
console.log("base:",base,"adds",adds)
Interceptor.attach(Module.findExportByName("libtolua.so", "luaL_loadbuffer"), {
    onEnter: function (args) {
        var buffer = args[1];   // 解密后的 Lua 字节码地址
        var size = args[2].toInt32();
        var name = args[3].readCString();

        var data = Memory.readByteArray(buffer, size);
        var path = "/sdcard/MT2/" + name.replace(/\//g, "_").replace(/\./g, "_");
        console.log(path)
        var f = new File(path + ".luac", "wb");
        f.write(data);
        f.close();

        console.log("Dumped decrypted lua:", name, "->", path + ".luac");
    }
});

}

