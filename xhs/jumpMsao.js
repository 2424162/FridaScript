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

console.log("kaishi");
