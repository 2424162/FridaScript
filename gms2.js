console.log("start");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {

    var ArrayList = Java.use("java.util.ArrayList");

 //   Hook add 方法
    ArrayList.add.overload( 'java.lang.Object').implementation = function (element) {
        if(element.toString().length == 342){
            showStacks();
            console.log("ArrayList added: " + element );
            console.log("ArrayList type: " +  element.toString().length );
        }

        return this.add(element);  // 调用原始方法
    };

    var  BufferedReader= Java.use("java.io.BufferedReader")
    BufferedReader.readLine.overload('boolean').implementation = function (element) {
        var re = this.readLine(element);

       // console.log("readLine added: " + re);
        return  re // 调用原始方法
    };
    BufferedReader.readLine.overload().implementation = function () {
        var re = this.readLine();

   //    console.log("readLine 2added: " + re);
        return  re // 调用原始方法
    };
    let bncq = Java.use("bncq");
    bncq["a"].implementation = function (str) {

        console.log(`bncq.a is called: str=${str}`);
        let result = this["a"](str);
        console.log(`bncq.a result=${result}`);
        return result;
    };
});
