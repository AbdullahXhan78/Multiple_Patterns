var n = 5;
for (var i = 1; i <= n; i++) {
    //spaces
    for (var j = 1; j <= n; j++) {
        console.log(" ");
    }
    //first part
    for (var j = 1; j >= 1; j--) {
        console.log(j);
    }
    //second part
    for (var j = 2; j <= i; j++) {
        console.log(j);
    }
    console.log();
}
