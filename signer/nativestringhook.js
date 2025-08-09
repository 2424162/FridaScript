// == Hook strcmp ==
try {
    Interceptor.attach(Module.getExportByName("libc.so", "strcmp"), {
        onEnter: function (args) {
            const str1 = args[0].readCString();
            const str2 = args[1].readCString();
            console.log(`strcmp("${str1}", "${str2}")`);
        },
        onLeave: function (retval) {
            console.log("→ strcmp 返回值: " + retval.toInt32());
        }
    });
} catch (e) { console.log("strcmp not found."); }

// == Hook strncmp ==
try {
    Interceptor.attach(Module.getExportByName("libc.so", "strncmp"), {
        onEnter: function (args) {
            const str1 = args[0].readCString();
            const str2 = args[1].readCString();
            const len = args[2].toInt32();
            console.log(`strncmp("${str1}", "${str2}", ${len})`);
        },
        onLeave: function (retval) {
            console.log("→ strncmp 返回值: " + retval.toInt32());
        }
    });
} catch (e) { console.log("strncmp not found."); }

// == Hook strstr ==
try {
    Interceptor.attach(Module.getExportByName("libc.so", "strstr"), {
        onEnter: function (args) {
            this.haystack = args[0].readCString();
            this.needle = args[1].readCString();
        },
        onLeave: function (retval) {
            console.log(`strstr("${this.haystack}", "${this.needle}") → ${retval}`);
        }
    });
} catch (e) { console.log("strstr not found."); }

// == Hook strlen ==
try {
    Interceptor.attach(Module.getExportByName("libc.so", "strlen"), {
        onEnter: function (args) {
            this.str = args[0].readCString();
        },
        onLeave: function (retval) {
            console.log(`strlen("${this.str}") = ${retval.toInt32()}`);
        }
    });
} catch (e) { console.log("strlen not found."); }

// == Hook memcpy ==
try {
    Interceptor.attach(Module.getExportByName("libc.so", "memcpy"), {
        onEnter: function (args) {
            this.dst = args[0];
            this.src = args[1];
            this.size = args[2].toInt32();

            if (this.size > 0 && this.size < 200) {
                try {
                    const content = Memory.readUtf8String(this.src, this.size);
                    console.log(`memcpy(src="${content}", size=${this.size})`);
                } catch (e) {
                    console.log(`memcpy(src=无法解码, size=${this.size})`);
                }
            }
        }
    });
} catch (e) { console.log("memcpy not found."); }

// == Hook __android_log_print (Android) ==
try {
    Interceptor.attach(Module.getExportByName("liblog.so", "__android_log_print"), {
        onEnter: function (args) {
            const priority = args[0].toInt32();
            const tag = args[1].readCString();
            const fmt = args[2].readCString();
            console.log(`__android_log_print(priority=${priority}, tag="${tag}", fmt="${fmt}")`);
        }
    });
} catch (e) { console.log("__android_log_print not found."); }

