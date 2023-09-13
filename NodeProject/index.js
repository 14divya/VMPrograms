// console.log("Hello world");
// console.log("Welcome to NodeJS");
// console.log("Welcome to NodeJS");
// var x = new Date();
// console.log(x);

// greatest of 3 numbers 
var x = 10, y = 12, z = 13;
if (x > y && x > z) {
    console.log(x);
} else if (y > z) {
    console.log(y);
} else {
    console.log(z);
}

//number even/odd
var x=5;
if(x%2==0){
    console.log("even");
}else{
    console.log("odd");
}

//odd/even using switch
var x=3;
switch(x%2){
    case 0:console.log("even");
    break;
    default: console.log("odd");
    break;
}