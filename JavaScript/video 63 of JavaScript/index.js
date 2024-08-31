let arr = [1, 2, 3, 4, 5, 6, 7, 8]

arr[0] = 44

a = [1, 2, 3, 4]

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]

let b = [2, 1, 3]

let numbers = [1, 2, 3, 4, 5]

let c = [1, 2, 3, 4]

// console.log(arr)
// console.log(arr.length, typeof arr)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])
// console.log(arr[6])

// to string
console.log(arr.toString())
// to join 
console.log(arr.join(" and "))
// to pop 
console.log(arr.pop())
// to push 
console.log(a.push("Sami"))
// to shift
console.log(a.shift())
// to unshift
console.log(a.unshift("JACK"))
// to delete
console.log(delete a[4])
// to concat
console.log(a1.concat(a2, a3))
// to sort
console.log(b.sort())
// to splice
console.log(numbers.splice(1, 3, 44, 55))
// to slice
console.log(c.slice(1, 3))
// to reverse
console.log(c.reverse())

// loops
let d = [1, 32, 5, 88]

d.forEach((value, index, arr) => {
    console.log(value, index, arr)
})

// for in loop

let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}

for (const iterator of d) {
    console.log(iterator)
}

// map loop 
let f = [1, 13, 5, 7, 11];

// let newArr = []
// for (let index = 0; index < f.length; index++) {
//     const element = f[index];
//     newArr.push(element**2)
// }

// if we want a array wich is multiple of 2 we use this way but we can make it more simple for example 
let newArr = f.map((e, index, array) => {
    return e ** 2
})

console.log(newArr);

// to filter
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(f.filter(greaterThanSeven));

// to reduse 
let arr2 = [1, 2, 3, 4, 5, 6]
const red = (a, b) => {
    return a + b
}
console.log(arr2.reduce(red))

// to make array 
console.log(Array.from("Sami"))