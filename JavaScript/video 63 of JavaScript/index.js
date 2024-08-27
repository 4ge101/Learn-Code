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