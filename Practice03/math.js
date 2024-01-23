function rand(limit) {
    const rando = Math.random() * limit;
    return rando;
}

const num1 = rand(501);
const num2 = rand(501);
const randoSum = num1 + num2;

console.log(num1 + " + " + num2 + " = " + randoSum);
console.log("refresh to add again!");
