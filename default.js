// function addNumber(num1,num2){
//     return num1+num2;
// }

// const sum = addNumber(4,45);
// console.log(sum);

//If function passing one parameter, then it will take the default value.
function addNumber(num1,num2=20){ //assigning default value as 20.
    return num1+num2;
}

const sum = addNumber(15);
console.log(sum);