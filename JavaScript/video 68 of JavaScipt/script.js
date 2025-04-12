console.log("Hello Sami!");

let boxes = document.getElementsByClassName("box"); // getElementsByClassName is used tp target same classnames element in html for example we target box .

console.log(boxes);

// boxes[2].style.backgroundColor = "tomato";

document.getElementById("tomato").style.backgroundColor = "tomato"; // getElementById is used to target specific elements like we target tomato .


document.querySelector(".box").style.backgroundColor = "green"; // when we want to do inline css using JavaScript we use querrySelector but it only make first box green 

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "limegreen";
}) // If we use querySelectorAll then we cannot direct apply css like before we want to use for loop.


console.log(document.getElementsByTagName("div")); // getElementsByTageName is used to find all tag names like div and it show all div which is from html . 

let a = document.getElementsByTagName("div");

console.log(a[3].matches("#tomato")); // To check if element matches the given css selector and it answer in true or false

console.log(a[3].closest(".container")); // To look for nearest ancestor that matches the given css selector and "a which is varable" the a itself is also checked . 

console.log(document.querySelector(".container").contains(a[2])); // Returns true if "a[2] which is box" in inside the container or when container == a[2]
