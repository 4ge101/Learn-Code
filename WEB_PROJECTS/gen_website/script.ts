const logoSlide = document.querySelector(".logo-slide");
const logo = document.querySelector(".logo");

if (logoSlide instanceof HTMLElement && logo instanceof HTMLElement) {
  const copy = logoSlide.cloneNode(true);
  logo.appendChild(copy);
}
