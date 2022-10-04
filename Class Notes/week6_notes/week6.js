
function greet () {
    consoe.log("Hello Jer");
}

greet();

//calls back whenever im ready
//when a function is passed as a parameter to other ffuntion so it 
// can be called later on

function sayHi(callback){
    callback();
}

sayHi(greet);