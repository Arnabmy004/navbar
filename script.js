

const menuBtn = document.getElementById("nav-menu-btn");
const menuBtn1 = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");

navMenu.style.opacity = "0";
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none"
  menuBtn1.style.display = "flex"

  if (navMenu.style.opacity === "1") {
    navMenu.style.opacity = "0";
  } else {
    navMenu.style.opacity = "1";
  }

});

menuBtn1.addEventListener("click", () => {
  menuBtn.style.display = "flex"
  menuBtn1.style.display = "none"
  
  if (navMenu.style.opacity === "1") {
    navMenu.style.opacity = "0";
  } else {
    navMenu.style.opacity = "1";
  }
});