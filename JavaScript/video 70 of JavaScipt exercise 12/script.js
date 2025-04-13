const background_colors = {
    b1: "red",
    b2: "blue",
    b3: "purple",
    b4: "green",
    b5: "yellow"
}


const colors = {
    c1: "white",
    c2: "gray",
    c3: "black",
    c4: "pink",
    c5: "tomato"
}

document.querySelectorAll(".box").forEach(e => {
    // for background color
    e.style.backgroundColor = background_colors[`b${Math.floor(Math.random() * 5) + 1}`]

    // for color
    e.style.color = colors[`c${Math.floor(Math.random() * 5) + 1}`]

})