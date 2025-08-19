Java.perform(function () {
    var HttpURLConnection = Java.use('java.net.HttpURLConnection');
    var URL = Java.use('java.net.URL');
    var Proxy = Java.use('java.net.Proxy');

    var originalOpenConnection = URL.openConnection;
    URL.openConnection.overload().implementation = function () {
        var connection = originalOpenConnection.call(this);
        console.log('URL.openConnection called: ' + this.toString());
        return connection;
    };


    var HttpURLConnectionImpl = Java.use('com.android.okhttp.internal.huc.HttpURLConnectionImpl');
     HttpURLConnectionImpl.connect.overload().implementation = function () {
        console.log('connect()');
        HttpURLConnectionImpl.connect.call(this);
    };
    
    HttpURLConnectionImpl.setRequestProperty.implementation = function(name,value){
                console.log("setRequestProperty => ",name,": ",value);
                return this.setRequestProperty(name,value);
     };
            
    HttpURLConnectionImpl.setRequestMethod.implementation = function(type){
                console.log("setRequestMethod : ",type);
                return this.setRequestMethod(type);
      };
            
    HttpURLConnectionImpl.responseSourceHeader.implementation = function(response){
    			var result = this.responseSourceHeader(response);
    			console.log("responseSourceHeader : " + result);
    			return result;
   };
   
    HttpURLConnectionImpl.getResponseCode.overload().implementation = function(){
                 var code =    this.getResponseCode();
                console.log("getResponseCode : " + code);
                return code;
    };

    HttpURLConnectionImpl.setConnectTimeout.overload("int").implementation = function(time){
        		console.log("setConnectTimeout : " + time);
        		return this.setConnectTimeout(time);
    		};
    		
    var testInput;
    HttpURLConnectionImpl.getInputStream.overload().implementation = function () {
        var returnStream = HttpURLConnectionImpl.getInputStream.call(this);
        testInput = returnStream;
        var inputStr = readInputStream(testInput);
        console.log("getInputStream(): " + inputStr);
        return returnStream;
    };


    function readInputStream(inputStream){
        var str = '';
        if(inputStream == null){
            console.log("inputStream is null");
            return str;
        }
        try{
            var inputStreamReader = Java.use('java.io.InputStreamReader').$new(inputStream ,"UTF-8");
            var bufferedReader = Java.use('java.io.BufferedReader').$new(inputStreamReader);
            var response = Java.use('java.lang.StringBuffer').$new();
            var line = null;
            while((line = bufferedReader.readLine()) != null){
                response.append(line);
            }
            bufferedReader.close();
            str = response;
        }catch(error){
            console.error( "inputstream error: " + error);
            return null;
        }
        return str;
    }
});
