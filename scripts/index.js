const navbar = document.getElementById("main_navbar");
const nav_toggle = document.getElementById("nav_toggle");
let toggle_state = nav_toggle.getAttribute("aria-expanded");

nav_toggle.addEventListener("click", () => {
  if (toggle_state === "true") {
    navbar.style.transform ="translateX(100%)";
    navbar.style.transition = "transform 250ms ease-out, visibility 250ms";
    navbar.style.visibility = "hidden";
    toggle_state = "false";
    nav_toggle.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
  } else if (toggle_state === "false") {
    navbar.style.visibility = "visible";
    navbar.style.display = "flex";
    navbar.style.transform ="translateX(0%)";
    navbar.style.transition = "transform 250ms ease-in";

 nav_toggle.innerHTML = '<i class="fa-solid fa-x fa-xl"></i>';
    toggle_state = "true";
    
  }
});
