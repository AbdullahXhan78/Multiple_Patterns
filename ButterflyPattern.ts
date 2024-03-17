let n = 4;

//upper part
for(let i =1; i<=n; i++){
    for(let j = 1; j<=1 ; j++){
        console.log("*");
    }
    let spaces = 2 * (n - i);
    for(let j = 1; j<=spaces; j++){
        console.log(" ")
    }
    for(let j = 1; j<=i; j++){
        console.log("*");
    }
    console.log();
}
//lower part
for(let i = n; i>=1; i--){
    for(let j =1; j<=i; j++){
        console.log("*");
    }
    let spaces = 2 * (n - i);
    for(let j = 1; j<=spaces;j++){
        console.log(" ");
    }
    for (let j = 1; j<=i; j++){
        console.log("*");
    }
    console.log();
}