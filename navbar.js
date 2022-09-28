const navbar = document.getElementById(`showMenu`);

function toggleMobileMenu() {

    if (navbar.classList.contains(`visible`)) {
        navbar.classList.remove(`visible`);
    } else {
        navbar.classList.add(`visible`);
    };
}