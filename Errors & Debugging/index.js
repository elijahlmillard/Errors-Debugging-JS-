// STARTER CODE

function calculateTotal(numbers) {
 let total = 0;
 for (let i = 0; i <= numbers.length /*- 1*/; i++) { // BUG: <= causes undefined
   total += numbers[i];
  //  console.log(total);
 }
//  console.log(typeof total);
//  console.log("returning:", total, typeof total);
 return total;
}

function calculateAverage(numbers){
  if(!numbers || numbers.length === 0) throw Error("cannot calculate ave of empty array")
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (sum / numbers.length);
}



const data1 = [1, 2, 3];
const data2 = [4, 5, 6];

// console.log(calculateTotal(data1));
// console.log(calculateTotal(data2));
try {
  console.log(calculateAverage(data1))
} catch (error) {
  console.log(error);
}
// console.log(calculateAverage(data1))
console.log(calculateAverage(data2))
