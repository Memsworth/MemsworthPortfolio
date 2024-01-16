"use strict";
// navbar.ts
document.addEventListener("DOMContentLoaded", function () {
    var navbarBurger = document.getElementById("navbarBurger");
    var navbarMenu = document.getElementById("navbarMenu");
    if (navbarBurger && navbarMenu) {
        navbarBurger.addEventListener("click", function () {
            navbarBurger.classList.toggle("is-active");
            navbarMenu.classList.toggle("is-active");
        });
    }
});
