let n = 5;
for(let i = 1; i <= n; i++){
    //spaces
    for(let j = 1; j <= n; j++){
        console.log(" ");
    }
    //numbers
    for(let j = 1; j <= i; j++){
        console.log(i + " ");
    }
    console.log();
}