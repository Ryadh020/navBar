//NAvbar:
const xo = document.querySelector(".XO");
const navbar = document.querySelector(".navBar");
const navbarEnd = document.querySelector(".navbarEnd");
const button = document.getElementsByClassName("button");
const homeButton = document.getElementById("home");

// section:
const data = document.querySelector(".data");
const titleContainer = document.querySelector(".title");
const title = document.querySelector(".title-blink");
const content = document.querySelector(".content");
const contentText = document.querySelector(".content-text");
const list = document.querySelector(".list");

// floating image bellow the frame:
const image = document.querySelector(".image-content");
const frame = document.querySelector(".image-border");

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
      // hide text with animation:
    title.style.top =  "16px";
    contentText.style.top = "10px"
    list.style.right = "20px"
      // hide the data section content :
    setTimeout(() => {
      titleContainer.style.visibility = "hidden";
      content.style.visibility = "hidden";
      list.style.visibility ="hidden";
    }, 200);
      // shrink the data section :
    setTimeout(() => {
      data.style.height = "10px";
    }, 300);
      // hide the data section :
    setTimeout(() => {
      data.style.display = "none";
    }, 1500);
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
  data.style.display = "flex";  // show the data section
  setTimeout(() => {  // spand the data section
    data.style.height = "900px";
  }, 0);
  setTimeout(() => {  
      // show the data section content :
    titleContainer.style.visibility = "visible";
    content.style.visibility = "visible";
    list.style.visibility ="visible";
      // show text with animation:
    title.style.top =  "0px";
    contentText.style.top = "0px"
    list.style.right = "0px"
  }, 900);
})

  // on hovering in the image frame:
frame.addEventListener("mouseover", ()=> {
  image.style.top = "30px";
})
  // on hovering out the image frame: 
frame.addEventListener("mouseout", ()=> {
  image.style.top = "0px";
})

/*
const image = document.querySelector(".image-content");
const frame = document.querySelector(".image-border");
*/