//FUNCTION DECLARATION
const fifthPow = (num) => {
    return num ** 5;
}

console.log(fifthPow(2)) // 32

//FUNCTION EXPRESION ANNON or FAT ARROW
const fifthPow = (num) => {
    return num ** 5;
}

//or
const fifthPow = (num) => (num ** 5);

console.log(fifthPow(2))

//can also be written as...
const fifthPow = num => num ** 5 //no parentesis necessary because there is only one argument "num" unless there's a defaut value
// for ex:
const fifthPow = (num = 1) => num ** 5

//NAMED FUNCTION EXPRESSION
const fifthPow = function someRandomNamelol(num) {

}

