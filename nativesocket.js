var sendto = Module.findExportByName(null, 'sendto');
if (sendto) {
    Interceptor.attach(sendto, {
        onEnter: function (args) {
            console.log('sendto called');
            console.log('Address: ' + args[0]);
            console.log('Data: ' + args[1].readUtf8String());
        },
        onLeave: function (retval) {
            // 在返回前的操作
        }
    });
}

// var recvfrom = Module.findExportByName(null, 'recvfrom');
// if (recvfrom) {
//     Interceptor.attach(recvfrom, {
//         onEnter: function (args) {
//             console.log('recvfrom called');
//             // 处理传入参数（如目标地址，数据等）
//         },
//         onLeave: function (retval) {
//             console.log('Received data: ' + retval.readUtf8String());
//         }
//     });
//}






