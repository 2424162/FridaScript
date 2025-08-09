// 1. 设置关键字符串
const keyword = "buttonclick";

// 2. 定位模块（比如 libtarget.so）
const targetModule = "libnativehook.so";
const module = Process.getModuleByName(targetModule);
console.log(module.base,"==",module.size)

function scanAndHookString(moduleName, targetString) {
    const module = Process.getModuleByName(moduleName);
    const pattern = targetString
      .split('')
      .map(c => ('0' + c.charCodeAt(0).toString(16)).slice(-2))
      .join(' ')
      .toUpperCase();
  
    Memory.scan(module.base, module.size, pattern, {
      onMatch: function (address, size) {
        console.log(`[+] Found "${targetString}" at ${address}`);
  
        // 使用 Interceptor 来监控字符串地址
        Interceptor.attach(address, {
          onEnter: function(args) {
            console.log("[*] String accessed at address:", address);
            const trace = Thread.backtrace(this.context, Backtrace.ACCURATE);
            trace.map(addr => {
              const symbol = DebugSymbol.fromAddress(ptr(addr));
              console.log("  Call stack:", symbol);
            });
          },
          onLeave: function(retval) {
            console.log("[*] String access completed.");
          }
        });
      },
      onComplete: function () {
        console.log("[*] Scan complete.");
      },
      onError: function (reason) {
        console.error("Scan error:", reason);
      }
    });
  }
  
  scanAndHookString(targetModule,keyword)