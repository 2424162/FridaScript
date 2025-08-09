console.log("kaishi");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}
function hookOverloads(className, func) {
    var clazz = Java.use(className);
    var methodOverloads = clazz[func].overloads;
    clazz.$init.overload('java.lang.String', 'int').implementation = function (arg1,arg2) {
        showStacks()

        // 调用原始方法
        this.$init(arg1,arg2);
        console.log(arg1,arg2)
    };
    clazz.$init.overload('java.net.InetAddress', 'int').implementation = function (arg1,arg2) {
        showStacks()

        // 调用原始方法
        this.$init(arg1,arg2);
        console.log(arg1,arg2)
    };
    clazz.$init.overload('java.net.InetAddress', 'int', 'boolean').implementation = function (arg1,arg2) {
        showStacks()

        // 调用原始方法
        this.$init(arg1,arg2);
        console.log(arg1,arg2)
    };
    clazz.getInputStream.implementation = function(){
        var ret = this.getInputStream()
        console.log(ret)
        return ret
    }


  }
  
  Java.perform(function() {
    hookOverloads('java.net.Socket', '$init');
  })