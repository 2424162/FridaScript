function traceNativeExport(){

    var modules = Process.enumerateModules();
    for(var i = 0;i<modules.length;i++){
        var module = modules[i];
        //只hook libc.so
        if(module.name.indexOf("libc.so")<0){
            continue;
        }

        var exports = module.enumerateExports();
        for(var j = 0;j<exports.length;j++){
            //console.log("module name is =>",module.name," symbol name is =>",exports[j].name)
            //var path = "/sdcard/Download/so/"+module.name+".txt"
            // var path = "/data/data/com.ss.aweme/cache/"+module.name+".txt"
            // writeSomething(path,"type: "+exports[j].type+" function name :"+exports[j].name+" address : "+exports[j].address+" offset => 0x"+ ( exports[j].address.sub(modules[i].base) )+"\n")
            // if(exports[j].name.indexOf("strto")>=0)continue;
            // if(exports[j].name.indexOf("strco")>=0)continue;
            // if(exports[j].name.indexOf("_l")>=0)continue;
            // if(exports[j].name.indexOf("pthread")>=0)continue;
            
            //int socket(int domain, int type, int protocol);
            /*if(exports[j].name.indexOf("socket")>=0){
                 attach(exports[j].name,exports[j].address);
            }*/
            /*if(exports[j].name.indexOf("pthread_create")>=0){
                attach(exports[j].name,exports[j].address);
            }*/
            //int  connect(int  sockfd,  const struct sockaddr *serv_addr, socklen_t addrlen)
            /*if(exports[j].name.indexOf("connect")>=0){
                attach(exports[j].name,exports[j].address);
            }*/
            // if(exports[j].name.indexOf("read")>=0){
            //     attach(exports[j].name,exports[j].address);
            // }
            // if(exports[j].name.indexOf("write")>=0){
            //     attach(exports[j].name,exports[j].address);
            // }
            //ssize_t send(int sockfd, const void *buf, size_t len, int flags);
            if(exports[j].name.indexOf("send")>=0){
                 attach(exports[j].name,exports[j].address);
            }
            /*if(exports[j].name.indexOf("strstr")>=0){
                attach(exports[j].name,exports[j].address);
            }*/
            /*if(exports[j].name.indexOf("strcmp")>=0){
                attach(exports[j].name,exports[j].address);
            }*/
            if(exports[j].name.indexOf("fgets")>=0){
                attach(exports[j].name,exports[j].address);
            }
            // if(exports[j].name.indexOf("recv")>=0){
            //     attach(exports[j].name,exports[j].address);
            // }

        }
    }
}

function attach(name,address){
    console.log("attaching ",name);
    Interceptor.attach(address,{
        onEnter:function(args){
            console.log('RegisterNatives called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
            console.log("Entering => " ,name)
            console.log("args[0] => ",args[0])
            console.log("args[1] => ",args[1].readCString())
            /*if(args[0].readCString().indexOf("frida")>=0
                ||args[0].readCString().indexOf("xpose")>=0
                ||args[1].readCString().indexOf("xpose")>=0
                ||args[1].readCString().indexOf("frida")>=0){
                    console.log("Entering => " ,name)
                    console.log("args[0] => ",args[0].readCString())
                    console.log("args[1] => ",args[1].readCString())
                    console.log('\n called from:\n' +Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
            }*/
            /*console.log("args[0] => ",args[0].readCString())
            console.log("args[1] => ",args[1].readCString())*/
            /*console.log( hexdump(args[0],{
                offset: 0,
                length: parseInt(args[1]),
                header: true,
                ansi: true
            }))*/
            
            //console.log("args[2] => ",args[2])
            //console.log('\n called from:\n' +Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');

        },onLeave:function(retval){
            console.log("retval is => ",retval)
            console.log("\n exit => ",name)
            // console.log("retval is => ",retval.readCString())
        }
    })

}

traceNativeExport()