Java.perform(function() {


    var String  = Java.use("java.lang.String");
    String.charAt.implementation = function (q){
        var re = this.charAt(q)
        
        if(this.toString().includes("EciesAead")){
            console.log("string:",this.toString())
        }
        return  re
    }
    
});