document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname;

    navItems.forEach(item => {
        const itemPath = new URL(item.getAttribute('href'), window.location.origin).pathname;
        if (currentPath === itemPath) {
            item.classList.add('active');
        }

        item.addEventListener('click', function(e) {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
        });
    });
});