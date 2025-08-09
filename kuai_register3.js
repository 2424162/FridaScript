var addr_ArtMethod_RegisterNative = libart.findExportByName("_ZN3art9ArtMethod14RegisterNativeEPKvb");
Interceptor.attach(addr_ArtMethod_RegisterNative, {
    onEnter: function(args){
        this.arg0 = args[0]; //this
        allocPrettyMethod.writeByteArray(allocPrettyMethodInit);
        PrettyMethod(addr_ArtMethod_PrettyMethod, args[0], allocPrettyMethod, 0x100);
        console.log("ArtMethod_RegisterNative onEnter:",allocPrettyMethod.readCString(),this.arg0, args[1], args[2]);
    },
    onLeave: function(retval){
        // console.log("ArtMethod_RegisterNative onLeave:",this.arg0);
    }
});