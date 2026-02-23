// STARTER CODE

// function calculateTotal(numbers) {
//  let total = 0;
//  for (let i = 0; i <= numbers.length - 1; i++) { // BUG: <= causes undefined
//    total += numbers[i];
//   //  console.log(total);
//  }
// //  console.log(typeof total);
// //  console.log("returning:", total, typeof total);
//  return total;
// }

function calculateTotal(numbers) {
  if (!numbers || !Array.isArray(numbers)) throw new Error("Input must be an array");
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function calculateAverage(numbers){
  if(!numbers || numbers.length === 0) throw Error("cannot calculate ave of empty array")
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return (sum / numbers.length);
}
function findPositive(numbers){
  if(!numbers || numbers.length === 0) throw Error("cannot find pos of empty array")
  const positiveNumbers = numbers.filter(number => number > 0);
  return positiveNumbers;
}

function findMax(numbers){
    const max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
  }, -Infinity);
  return max;
}

const data1 = [-1, 2, -3];
const data2 = [];

try {
  console.log(calculateTotal(data1));
  console.log(calculateAverage(data1));
  console.log(findPositive(data1));
  console.log(findMax(data1));

  console.log(calculateTotal(data2));
  console.log(calculateAverage(data2));
  console.log(findPositive(data2));
  console.log(findMax(data2));
} catch (error) {
  console.log(error);
  console.log("try again 😒");
} finally {
  console.log("End of process");
}

// try {
//   console.log(findPositive(data1));
// } catch (error) {
//   console.log(error);
// }

// console.log(calculateTotal(data1));
// console.log(calculateTotal(data2));

// try {
//   console.log(calculateAverage(data1))
// } catch (error) {
//   console.log(error);
// }
// try {
//   console.log(calculateAverage(data2))
// } catch (error) {
//   console.log(error);
// }

