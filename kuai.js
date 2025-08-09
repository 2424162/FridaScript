function hook_so()
{
    var base = Module.findBaseAddress("libkwsgmain.so");
    if (base) {
        var addr_doCommandNative = base.add(0x40cd4);
        Interceptor.attach(addr_doCommandNative, {
            onEnter: function (args) {
                
                console.log("doCommandNative() args[2] = "+" |" +args[0]+" |"+args[1]+"|"+ args[2]+"|"+args[3]+"|"+ args[4]+"|"+args[5])
            }, onLeave: function (retval) {
                console.log("Return value as string: " + retval);
            }
        })
        var addr_gdbf = base.add(0x408a4);
        Interceptor.attach(addr_gdbf, {
            onEnter: function (args) {
                console.log("gdbf() enter")
            }, onLeave: function (retval) {
            }
        })
        var addr_dcabk = base.add(0x40948);
        Interceptor.attach(addr_dcabk, {
            onEnter: function (args) {
                console.log("dcabk() enter")
            }, onLeave: function (retval) {
            }
        })
        var addr_gdgi = base.add(0x403bc);
        Interceptor.attach(addr_gdgi, {
            onEnter: function (args) {
                console.log("gdgi() enter")
            }, onLeave: function (retval) {
            }
        })
        var addr_gksf = base.add(0x407f0);
        Interceptor.attach(addr_gksf, {
            onEnter: function (args) {
                console.log("gksf() enter")
            }, onLeave: function (retval) {
            }
        })
    }
}
hook_so()