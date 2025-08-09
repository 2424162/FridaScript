console.log("start")
function showStacks(){
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}


Java.perform(function () {
    var AccountManagerService = Java.use('com.android.server.accounts.AccountManagerService');
    AccountManagerService.getAuthToken.implementation = function(response, account, authTokenType, isRead, isWrite, options) {

        var result = this.getAuthToken(response, account, authTokenType, isRead, isWrite, options);
        console.log('IAccountManagerResponse: ' + response);
        console.log('Account: ' + account);
        console.log('authTokenType: ' + authTokenType);
        console.log('isRead: ' + isRead);
        console.log('isWrite: ' + isWrite);
        console.log('options: ' + options);

        return result;
    };
});
