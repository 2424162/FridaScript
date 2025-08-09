// 获取 Activity 类
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {
    var Activity = Java.use("android.app.Activity");

    // Hook onCreate 方法
    Activity.onCreate.overload("android.os.Bundle").implementation = function (bundle) {
        showStacks()
        console.log("Activity.onCreate() called for: " + this.getClass().getName());
        
        // 调用原始方法
        this.onCreate(bundle);

        console.log("Activity onCreate hook executed.");
    };
});
