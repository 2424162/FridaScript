Java.perform(function() {
    // 获取目标函数地址
    var targetFunc = Module.findExportByName("libtarget.so", "target_function");
    
    Interceptor.attach(targetFunc, {
        onEnter: function(args) {
            console.log("=== Entering target_function ===");
            
            // 初始化 Stalker
            this.stalker = Stalker.follow({
                events: {
                    call: true,    // 追踪调用指令
                    ret: false,    // 不追踪返回指令
                    exec: false,   // 不追踪普通指令
                    block: false,  // 不追踪基本块
                    compile: false // 不显示编译事件
                },
                onReceive: function(events) {
                    // 处理接收到的追踪事件
                    console.log("Stalker events:", events);
                },
                transform: function(iterator) {
                    // 指令级转换
                    var instruction = iterator.next();
                    do {
                        console.log(instruction);
                        iterator.keep();
                    } while ((instruction = iterator.next()) !== null);
                }
            });
        },
        onLeave: function(retval) {
            console.log("=== Leaving target_function ===");
            // 停止 Stalker
            Stalker.unfollow(this.stalker);
            Stalker.flush();
        }
    });
});