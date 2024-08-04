let a = 1;

// console.log(a);
// console.log(a + 1);
// console.log(a + 2);

// for loop

for (let l = 0; l < 100; l++) {
    console.log(a + l);
}

// for-in loop 

let obj = {
    "Name": "Sami",
    "Age": "12",
    "Company": "none"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

// for of loop

for (const c of "Sami") {
    console.log(c)
}

// while loop

let i = 0;

while (i < 10) {
    console.log(i)
    i++;
}

// do while loop
let j = 10;

do {
    console.log(j)
    j++;
} while (j < 6);