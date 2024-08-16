window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navigation-bar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
