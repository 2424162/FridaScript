Java.perform(function () {
  console.log("[*] Script loaded. Waiting for class 'me.tigrik.a' to be loaded...");

  var checkInterval = setInterval(function () {
    try {
      var Clz = Java.use("me.tigrik.a");
      console.log("[+] Class me.tigrik.a loaded!");

      // 打印类的方法名
      Object.getOwnPropertyNames(Clz.__proto__).forEach(function (m) {
        console.log("[*] Found method:", m);
      });

      // Hook 目标方法 a()
      if ('a' in Clz) {
        Clz.a.implementation = function () {
          console.log("[*] me.tigrik.a.a() called");
          const result = this.a.apply(this, arguments);
          console.log("[*] Return value:", result);
          return result;
        };
        console.log("[+] Hooked method: a()");
      }

      clearInterval(checkInterval); // 停止检查
    } catch (e) {
      // 类尚未加载，不打印报错，继续轮询
    }
  }, 1000); // 每 1 秒检查一次
});
