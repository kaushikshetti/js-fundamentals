//console.table("Hello");

//function declaration
function sum() {
  let a = 10;
  let b = 20;
  let sum = a + b;
  return sum;
}

//console.log("Sum is", sum());

//Array for of loop
const arr = [1, 2, 3, 4, 5];
for (const itr of arr) {
  //console.log("itr", itr);
}

//Array Push

const fruits = ["Aki", "Chainsaw"];
fruits.push("Denji");

//Array forEach

let num = [1, 2, 3, 4, 5];
let count = 0;
num.forEach(myfunc);

function myfunc() {
  count += 1;
  //console.log("count", count);
}

//Array Map function
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}

console.log(newArr);
