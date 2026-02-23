// STARTER CODE

function calculateTotal(numbers) {
 let total = 0;
 for (let i = 0; i <= numbers.length /*- 1*/; i++) { // BUG: <= causes undefined
   total += numbers[i];
   console.log(total);
 }
 console.log(typeof total);
 console.log("returning:", total, typeof total);
 return total;
}

const data1 = [1, 2, 3];
const data2 = [4, 5, 6];

console.log(calculateTotal(data1));
console.log(calculateTotal(data2));
