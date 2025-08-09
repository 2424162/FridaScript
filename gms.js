console.log("kaishi");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}


Java.perform(function () {
    var ArrayList = Java.use("java.util.ArrayList");

 //   Hook add 方法
    ArrayList.add.overload( 'java.lang.Object').implementation = function (element) {
        if(typeof element == 'string' && element.toString().length >= 202){
            showStacks();
            console.log("ArrayList added: " + element );
            console.log("ArrayList type: " +  element.toString().length );

        }


        return this.add(element);  // 调用原始方法
    };
    let Parcel = Java.use("android.os.Parcel");
    Parcel["readString"].implementation = function () {
        // showStacks()
        let result = this["readString"]();
        if (typeof result === 'string' && result.startsWith('ey')) {
            showStacks()
            console.log(`readString called: str=${result}`);
        }
         return result;
     };
    Parcel["writeString"].implementation = function (str) {
        if (typeof str === 'string' && str.startsWith('ey')) {
            showStacks()
            console.log(`writeString called: str=${str}`);
        }

        let result = this["writeString"](str);
        return result;
    };
    var HashMap = Java.use("java.util.HashMap");

    // Hook HashMap 的 put 方法
    // HashMap.put.implementation = function (key, value) {

    //     // 调用原始的 put 方法
    //     var result = this.put(key, value);
    //     if(key=="family_name"){
    //         showStacks()
    //                 // 打印调用信息
    //     console.log("HashMap.put called with key: " + key + ", value: " + value);
        
    //     }

        
    //     // 返回原始方法的返回值
    //     return result;
    // };

    // // Hook HashMap 的 get 方法
    // HashMap.get.implementation = function (key) {
    //     // 打印调用信息

        
    //     // 调用原始的 get 方法
    //     var result = this.get(key);
    //     if(key=="family_name"){
    //         showStacks()
    //         console.log("HashMap.get called with key: " + key);
    //         console.log("HashMap.get returned: " + result);
    //     }
        
    //     // 打印返回值

        
    //     // 返回原始方法的返回值
    //     return result;
    // };

let asso = Java.use("asso");
asso["$init"].implementation = function (asspVar, i, bundle) {
    console.log(`asso.$init is called: asspVar=${asspVar}, i=${i}, bundle=${bundle}`);
    this["$init"](asspVar, i, bundle);
};


let Intent = Java.use("android.content.Intent")
Intent["$init"].overload('android.content.Context', 'java.lang.Class').implementation = function (context,clazz) {
    console.log(`Intent.$init is called: context=${context}, clazz=${clazz}`);
    this["$init"](context,clazz);
};
let bioc = Java.use("bioc");
bioc["onServiceConnected"].implementation = function (componentName, iBinder) {
    console.log(`bioc.onServiceConnected is called: componentName=${componentName}, iBinder=${iBinder}`);
    this["onServiceConnected"](componentName, iBinder);
};

let ContextImpl = Java.use("android.app.ContextImpl")
ContextImpl["bindService"] .overload('android.content.Intent', 'android.content.ServiceConnection', 'int').implementation = function (intent, service,b) {
    console.log(`bindService is called: intent=${intent}, service=${service.value}`);
    let re = this["bindService"](intent,service,b);
    return re
};

});