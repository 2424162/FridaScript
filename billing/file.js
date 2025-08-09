Java.perform(function () {
    const File = Java.use("java.io.File");

    // Hook 构造函数 File(String pathname)
    File.$init.overload('java.lang.String').implementation = function (path) {
        console.log("[+] File init with path: " + path);
        return this.$init(path);  // 调用原始构造函数
    };

    // Hook File.toString()
    File.toString.implementation = function () {
        const result = this.toString();
        console.log("[+] File.toString(): " + result);
        return result;
    };

    // Hook File.getName()
    File.getName.implementation = function () {
        const name = this.getName();
        console.log("[+] File.getName(): " + name);
        return name;
    };
    File.$init.overload('java.io.File', 'java.lang.String').implementation = function (parent, child) {
    console.log("[+] File init with parent: " + parent + ", child: " + child);
    return this.$init(parent, child);
};

// File(String parent, String child)
File.$init.overload('java.lang.String', 'java.lang.String').implementation = function (parent, child) {
    console.log("[+] File init with parent path: " + parent + ", child: " + child);
    return this.$init(parent, child);
};
});