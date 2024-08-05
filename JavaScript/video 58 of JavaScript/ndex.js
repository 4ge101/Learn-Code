function hero(name) {
    console.log("Hey " + name + " what is your name?");
    console.log("Yes " + name + " my name is Ali Sami!");
    console.log("I " + name + " am a begginer in programming");
    console.log("i " + name + " want to learn many skills");
}

hero("rohan");
hero("sami");


// Another function

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}

result1 = sum(3, 4)
result2 = sum(54, 80)
result3 = sum(32, 54, 1)

console.log("the sum of thes number is: ", result1)
console.log("the sum of thes number is: ", result2)
console.log("the sum of thes number is: ", result3)


// ARROW FUNCTION

const func1=(x)=>{
    console.log("Iam a arrow function", x)
}

func1(34);
func1(23);
func1(53);
func1(54);