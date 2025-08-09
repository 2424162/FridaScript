Java.perform(function () {
    Java.enumerateLoadedClasses({
        onMatch: function (className) {
            if (className.indexOf("MainActivity") !== -1) {
                console.log("[FOUND] " + className);
            }
            if (className.indexOf("Nfwq") !== -1) {
                console.log("[FOUND] " + className);
            }
        },
        onComplete: function () {
            console.log("✅ Done searching classes.");
        }
    });
});

let Nfwq = Java.use("com.fpm.vzf.Nfwq");
console.log(Nfwq)
Nfwq["o_lzi"].implementation = function (context, str) {
    console.log(`Nfwq.o_lzi is called: context=${context}, str=${str}`);
    this["o_lzi"](context, str);
};

let j = Java.use("com.fpm.vzf.j");
console.log(j)
j["b"].implementation = function (str) {
    console.log(`j.b is called: str=${str}`);
    let result = this["b"](str);
    console.log(`j.b result=${result}`);
    console.log("====================")
    return result;
};