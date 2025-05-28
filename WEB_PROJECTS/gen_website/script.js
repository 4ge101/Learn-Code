var logoSlide = document.querySelector(".logo-slide");
var logo = document.querySelector(".logo");
if (logoSlide instanceof HTMLElement && logo instanceof HTMLElement) {
    var copy = logoSlide.cloneNode(true);
    logo.appendChild(copy);
}
