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

const cords = document.querySelector(".cords");
const x = document.querySelector(".x");
const y = document.querySelector(".y");

// pivot page:
const butttton = document.querySelector(".menu");
const page = document.querySelector(".back");

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

  // on clicking the navigation buttons(home):
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
frame.addEventListener("mousemove", (event)=> {

  let Width = screen.width;
  let Height = screen.height;

    // get the coordinates of the window:
  let xCord = event.clientX;
  let yCord = event.clientY;

  let min = Height - yCord;
  let max = Height - yCord + 200;


  image.style.top = `${10}px`;
  image.style.left = `${10}px`;

    // display the coordinates:
  if(yCord < min + 100) {

  }
  x.innerHTML = `Ymin: ${min}`;
  y.innerHTML = `Ymax: ${max}`;
})


  // on hovering out the image frame: 
frame.addEventListener("mouseout", ()=> {
  image.style.top = "0px";
  image.style.left = "0px";
})


// IV. Pivoting page :
const scontent = document.querySelector(".scontent");

const h1 = document.querySelector(".h1");
const stitle = document.querySelector(".stitle");

const fline = document.querySelector(".fline");
const frstline = document.querySelector(".frstline");

const sline = document.querySelector(".sline");
const scndLine = document.querySelector(".scndLine");

const menuButton = document.querySelector(".menuButton");

const pagesNumber = document.querySelector(".pagesNumber");
const actualPage = document.querySelector(".actual");


  // detect the page pivoting:
let pivot = false;

  // when hovering the button:
butttton.addEventListener("mouseover", ()=> {
  if (!pivot) {
    page.style.borderTopLeftRadius = "15%";
    menuButton.style.top = "18px";
    setTimeout(() => {
      menuButton.style.top = "0px";
    }, 200);
  }else {
    page.style.top = "190px";
    menuButton.style.top = "18px";
    setTimeout(() => {
      menuButton.style.top = "0px";
    }, 200);
  }
})
butttton.addEventListener("mouseout", ()=> {
  if (!pivot) {
    page.style.borderTopLeftRadius = "0%";
  }else {
    page.style.top = "200px";
  }
})

  // when cliking the button:
  butttton.addEventListener("click", ()=> {
    if (!pivot) {
      setTimeout(() => {
        page.style.borderTopLeftRadius = "100%";
        menuButton.style.color = "black";
        // animate the actual page button:
        actualPage.style.left = "50px";
        pagesNumber.style.color = "black";
        setTimeout(() => {
          actualPage.style.left = "0px";
            // change the page number:
          actualPage.innerHTML = "2";
        }, 500);
      }, 0);
      setTimeout(() => {
        page.style.top = "200px";
          // show the text content:
        stitle.style.top = "0px";
        frstline.style.top = "0px";
        scndLine.style.top = "0px";
      }, 400);
      pivot = true;
    } else {
      setTimeout(() => {
        page.style.top = "0px";
        menuButton.style.color = "white";
          // animate the actual page button:
        actualPage.style.left = "50px";
        pagesNumber.style.color = "white";
        setTimeout(() => {
          actualPage.style.left = "0px";
            // change the page number:
          actualPage.innerHTML = "1";
        }, 500);
      }, 0);
      setTimeout(() => {
        page.style.borderTopLeftRadius = "0%";
          // show the text content:
        stitle.style.top = "42px";
        frstline.style.top = "30px";
        scndLine.style.top = "30px";
      }, 800);
      pivot = false;
    }
  })



