console.log("hello world");

let cont = document.body.childNodes[1]; // chile nodes is used to see body child nodes 
console.log(cont.firstChild);
console.log(cont.lastChild);
// If i want to access container child i can use first or last child

console.log(document.body.firstElementChild); // Sometimes we just need element chile nodes then we use "firstElementChild or lastElementChild" 
console.log(cont.lastElementChild);

console.log(cont.lastElementChild.style.color = "red",
    cont.lastElementChild.style.backgroundColor = "green");  //If i want to change the color and background color of child node i can use (lastElementChild.style.color = "red")

console.log(cont.lastElementChild.parentElement); //It is used to find parent of child element

console.log(document.body.firstElementChild.children); //It is used to find child element of parent element 

console.log(document.body.firstElementChild.children[3].nextElementSibling); //It is used to go child to another child

console.log(document.body.firstElementChild.children[3].previousElementSibling); //It is used to go child to previous child