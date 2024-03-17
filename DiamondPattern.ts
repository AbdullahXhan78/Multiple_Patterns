let n = 5;

//upper part
for(let i =1; i<=n; i++){
    //spaces
    for(let j = 1; j<=n-i ; j++){
        console.log(" ");
    }
    for(let j = 1; j<=2*(i-1); j++){
        console.log("*");
    }
    console.log();
}
//lower part
for(let i = n; i>=1; i--){
    //spaces
    for(let j =1; j<=n-i; j++){
        console.log(" ");
    }
    for (let j = 1; j<=2*(i-1); j++){
        console.log("*");
    }
    console.log();
}