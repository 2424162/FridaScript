const keyword = "BCBFD846";
//0EA9EA7BD967B60EFF29AB7746D8BFBC
Process.enumerateRanges("--rw-").forEach(range => {
    Memory.scan(range.base, range.size, keyword, {
        onMatch: function (addr) {
            console.log(`[FOUND] 地址: ${addr} => ` + addr.readCString());
        }
    });
});
