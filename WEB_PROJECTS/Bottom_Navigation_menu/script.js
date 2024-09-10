const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));  // Corrected 'classlist' to 'classList'
    this.classList.add('active');  // Corrected 'classlist' to 'classList'
}

list.forEach((item) => item.addEventListener('click', activeLink));