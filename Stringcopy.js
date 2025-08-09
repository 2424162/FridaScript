Java.perform(function() {


    var String  = Java.use("java.lang.String");
    String.concat.overload("java.lang.String").implemeentation = function (q){
        var re = this.concat(q)
        console.log("string:",q,re)
        return  re
    }
    
});