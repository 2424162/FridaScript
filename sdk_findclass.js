Java.perform(function () {
    var App = Java.use("android.app.Application");

    App.onCreate.implementation = function () {
        console.log("🎯 Application.onCreate");
        this.onCreate();

        setTimeout(function () {
            try {
let Nfwq = Java.use("com.fpm.vzf.Nfwq");
Nfwq["o_lzi"].implementation = function (context, str) {
    console.log(`Nfwq.o_lzi is called: context=${context}, str=${str}`);
    this["o_lzi"](context, str);
};
            } catch (e) {
                console.log("❌ hook失败: ", e);
            }
        }, 1000);  // 再延迟一点时间以确保类加载
    };
});
