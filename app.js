const xo = document.querySelector(".XO");
const navbar = document.querySelector(".navBar");
const navbarEnd = document.querySelector(".navbarEnd");
const button = document.querySelector(".button");

xo.addEventListener("click", ()=> {
      // rotate the clicked button "+ || x":
    xo.style;
      // Spand the Navbar:
    navbar.style.width = "300px"
      // make it curvy at the end :
    setTimeout(() => {
      navbarEnd.style.visibility = "visible";
    }, 150);
      //Show the buttons after 1 second:
    setTimeout(() => {
      button.style.visibility = "visible";
    }, 800);
})


