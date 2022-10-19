<<<<<<< HEAD
// Select DOM Elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    // Set Menu State To:
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    // Set Menu State To:
    showMenu = false;
  }
}

// Cloning divs where particles go in order not to put 300 of them in the markup :)

// const node = document.querySelector(".parts");
// [...Array(300)].forEach(_ =>
//   node.parentNode.insertBefore(node.cloneNode(true), node)
// );
=======
// Select DOM Elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    // Set Menu State To:
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    // Set Menu State To:
    showMenu = false;
  }
}

// Cloning divs where particles go in order not to put 300 of them in the markup :)

// const node = document.querySelector(".parts");
// [...Array(300)].forEach(_ =>
//   node.parentNode.insertBefore(node.cloneNode(true), node)
// );
>>>>>>> 4d27e1d2940cacadf92191ebed411de002604cfe
