// slider which change background img 
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
var slider = document.querySelector('.slider');
var sliderList = slider.querySelector('.list');
var thumbnail = document.querySelector('.slider .thumbnail');
var thumbnailItems = thumbnail.querySelectorAll('.item');
// Append the first thumbnail item initially
thumbnail.appendChild(thumbnailItems[0]);
// Function for next button
nextBtn.onclick = function () {
    moveSlider('next');
};
// Function for prev button
prevBtn.onclick = function () {
    moveSlider('prev');
};
// Function to move the slider
function moveSlider(direction) {
    var sliderItems = sliderList.querySelectorAll('.item');
    var thumbnailItems = document.querySelectorAll('.thumbnail .item');
    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    }
    else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }
    // Remove the animation class after animation ends
    slider.addEventListener('animationend', function () {
        slider.classList.remove(direction);
    }, { once: true });
}
// making page up if the icon click then page go up automatically
var pageUpButton = document.getElementById("pageUp");
pageUpButton === null || pageUpButton === void 0 ? void 0 : pageUpButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// making search bar
var searchButton = document.getElementById("search-toggle");
var searchBox = document.querySelector(".search-box");
var inputBox = document.getElementById("input-box");
var cancelButton = document.getElementById("cancel-toggle");
searchButton.addEventListener("click", function () {
    searchBox.classList.add("open");
    searchBox.classList.remove("closing");
    inputBox.focus();
});
cancelButton.addEventListener("click", function () {
    searchBox.classList.remove("open");
    searchBox.classList.add("closing");
});
// making responsive navbar
function toggleNav() {
    document.body.classList.toggle("activeNav");
}
