function register_vmp_main(op_list){
    var start_ip = 0;
    var ret;
    var linshi;
    for (;!ret;){
        op = op_list[start_ip++];
        console.log("linshi:"+linshi)
        ret = run_zhiling(op, op_list);
    }
    function run_zhiling(op, op_list){
        switch(op){
            case 0:
                linshi = new Array(op_list[start_ip++])
                break
            case 1:
                linshi[op_list[start_ip++]] = void 0;
                break
            case 2:

                linshi[op_list[start_ip++]] = op_list[start_ip++];
                
                break
            case 3:
                linshi[op_list[start_ip++]] = linshi[op_list[start_ip++]] + linshi[op_list[start_ip++]];
                break;
            case 4:
                console.log(linshi[op_list[start_ip++]]);
                break;
            case 5:
                return true
        }
    }
}
register_vmp_main([0,255,1,0,1,1,1,2,2,0,15,2,1,18,3,2,0,1,4,2,5])