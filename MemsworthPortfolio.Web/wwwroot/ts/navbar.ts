// navbar.ts
document.addEventListener("DOMContentLoaded", function () {
    const navbarBurger = document.getElementById("navbarBurger");
    const navbarMenu = document.getElementById("navbarMenu");

    if (navbarBurger && navbarMenu) {
        navbarBurger.addEventListener("click", function () {
            navbarBurger.classList.toggle("is-active");
            navbarMenu.classList.toggle("is-active");
        });
    }
});
