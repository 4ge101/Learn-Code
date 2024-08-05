let marks = {
    "Sami": 98,
    "Rohan": 70,
    "Akash": 7
}

for (const key in marks) {
    const element = marks[key];
    console.log(key, element)
}

// problem 2

let o = 10;

for (let i = 0; i < 100; i++) {
    console.log(i)
}

if (o > 10) {
    console.log("congarts you guess it raight")
}

else {
    console.log("Try again")
}

// problem 3

function FindMeanFive(a, b, c, d, e) {
    return a + b + c + d + e
}

result1 = FindMeanFive(2, 4, 9, 0, 7)
result2 = FindMeanFive(3, 2, 4, 8, 18)
result3 = FindMeanFive(22, 65, 5, 5, 61)
result4 = FindMeanFive(9, 65, 53, 89, 9)
result5 = FindMeanFive(67, 87, 37, 8, 8)

console.log("Your mean is: ", result1)
console.log("Your mean is: ", result2)
console.log("Your mean is: ", result3)
console.log("Your mean is: ", result4)
console.log("Your mean is: ", result5)