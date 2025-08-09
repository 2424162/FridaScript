console.log("kaishi");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}


Java.perform(function () {
    var qphoto = Java.use('java.net.SocketOutputStream');
        qphoto.	write.overload('[B', 'int', 'int').implementation = function (q,w,e) {

    var re = this.write(q,w,e)
    console.log("Sokcet:",q)

    return re
    }


    
});