const age1 = [14,87,56];
const age2 = [58,80,76];
const allAges = age1.concat(age2);//as usual 
const allAges2 = [age1,age2]; // array within an array
const allAges3 = [...age1,5,...age2]//three dots method
console.log(allAges);
console.log(allAges2);
console.log(allAges);
console.log(allAges3);
const numbers = [45,78,95,12,5];
const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);

console.log(maxNumber);
console.log(minNumber);
