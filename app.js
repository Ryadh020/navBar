const xo = document.querySelector(".XO");
const navbar = document.querySelector(".navBar");
const navbarEnd = document.querySelector(".navbarEnd");
const button = document.getElementsByClassName("button");
  // detect if the + butto is clicked or no:
let Showen = false;


xo.addEventListener("click", ()=> {
  if (!Showen) { // if the navBar is closed:
    // rotate the clicked button "+ || x":
    xo.style.transform = "rotate(0deg)";
    xo.style.color = "white";
        // Spand the Navbar:
    navbar.style.width = "300px"
        // make it curvy at the end :
    setTimeout(() => {
      navbarEnd.style.visibility = "visible";
    }, 150);
        //Show the buttons after 1 second:
    setTimeout(() => {  
      for (var i = 0; i < button.length; i++) {
        button[i].style.visibility = "visible";
      }
    }, 800);
    Showen = true;
  } else { // if the navbar is open:
    xo.style.transform = "rotate(45deg)";
    xo.style.color = "black";
    for (var i = 0; i < button.length; i++) { // hide all buttons:
      button[i].style.visibility = "hidden";
    }
    navbar.style.width = "0px" // shrink the navBar
    navbarEnd.style.visibility = "hidden";  // make the navBar sharp at the end
    Showen = false;
  }

})


