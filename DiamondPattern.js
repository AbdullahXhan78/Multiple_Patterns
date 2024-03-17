var n = 5;
//upper part
for (var i = 1; i <= n; i++) {
    //spaces
    for (var j = 1; j <= n - i; j++) {
        console.log(" ");
    }
    for (var j = 1; j <= 2 * (i - 1); j++) {
        console.log("*");
    }
    console.log();
}
//lower part
for (var i = n; i >= 1; i--) {
    //spaces
    for (var j = 1; j <= n - i; j++) {
        console.log(" ");
    }
    for (var j = 1; j <= 2 * (i - 1); j++) {
        console.log("*");
    }
    console.log();
}
