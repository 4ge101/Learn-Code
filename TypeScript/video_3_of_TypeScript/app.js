function sum(num1, num2) {

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }

    else {
        return new Error("values are not a number");
    }

}
console.log(sum(20, 30));