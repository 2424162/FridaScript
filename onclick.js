console.log("kaishi");
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}


Java.perform(function () {
    var qphoto = Java.use('android.app.Activity');
        qphoto.	dispatchTouchEvent.overload('android.view.MotionEvent').implementation = function (q) {

    var re = this.dispatchTouchEvent(q)

    return re
    }
    
});