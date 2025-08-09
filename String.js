Java.perform(function() {
    // 获取 StringBuilder 类
    var StringBuilder = Java.use('java.lang.StringBuilder');
    
    // Hook append(String) 方法
    StringBuilder.append.overload('java.lang.String').implementation = function(str) {
     //   console.log('append(String) called with argument: ' + str);
        return this.append(str);
    };
    StringBuilder.append.overload('java.lang.Object').implementation = function(str) {
     //   console.log('append(String) called with argument: ' + str);
        return this.append(str); 
    };

    // Hook append(char) 方法
    StringBuilder.append.overload('char').implementation = function(c) {
     //   console.log('append(char) called with argument: ' + c);
        return this.append(c);
    };
    var AbstractStringBuilder = Java.use('java.lang.AbstractStringBuilder');
    
    // Hook append(String) 方法
    AbstractStringBuilder.append.overload('java.lang.String').implementation = function(str) {
     //   console.log('AbstractStringBuilder append(String) called with argument: ' + str);
        return this.append(str);
    };

    // Hook append(char) 方法
    AbstractStringBuilder.append.overload('char').implementation = function(c) {
     //   console.log('AbstractStringBuilder append(char) called with argument: ' + c);
        return this.append(c);
    };

    // Hook append(int) 方法
    AbstractStringBuilder.append.overload('int').implementation = function(i) {
     //   console.log('AbstractStringBuilder append(int) called with argument: ' + i);
        return this.append(i);
    };

    var String  = Java.use("java.lang.String");
    String.concat.overload("java.lang.String").implemeentation = function (q){
        var re = this.concat(q)
        console.log("string:",q,re)
        return  re
    }
    String.charAt.implemeentation = function (q){
        var re = this.charAt(q)
        console.log("stringbyte:",this.toString)
        return  re
    }
    var CharsetUtils  = Java.use("libcore.util.CharsetUtils");
    CharsetUtils.toUtf8Bytes.implemeentation = function (q){
        var re = this.toUtf8Bytes(q)
        console.log("stringbyte:",this.toString())
        return  re
    }


    
});