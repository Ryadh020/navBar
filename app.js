//NAvbar:
const xo = document.querySelector(".XO");
const navbar = document.querySelector(".navBar");
const navbarEnd = document.querySelector(".navbarEnd");
const button = document.getElementsByClassName("button");
const homeButton = document.getElementById("home");

// section:
const data = document.querySelector(".data");
  // detect if the + butto is clicked or no:
let Showen = false;

  // spand and shrink the navBar:
xo.addEventListener("click", ()=> {
  if (!Showen) { // if the navBar is closed:
    // rotate the clicked button "+ || x":
    xo.style.transform = "rotate(0deg)";
    xo.style.color = "white";
        // Spand the Navbar:
    navbar.style.width = "300px"
        // make it curvy at the end :
    setTimeout(() => {
      navbar.style.borderTopRightRadius = "50px";
      navbar.style.borderBottomRightRadius = "50px";
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
    navbar.style.borderTopRightRadius = "0px";   // make the navBar sharp at the end
    navbar.style.borderBottomRightRadius = "0px";  
    Showen = false;
  }
})

  // on clicking the navigation buttons:
homeButton.addEventListener("click", ()=> {
  data.style.display = "inherit";
  setTimeout(() => {
    data.style.height = "900px";
  }, 50);
})

