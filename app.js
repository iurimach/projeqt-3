var rightdivhamburger = document.querySelector("#rightdivhamburger")
var hamburger=document.querySelector("#hamburger").addEventListener("click", fhamburger)
var nav=document.querySelector("nav")


function fhamburger(){


    if (rightdivhamburger.style.display === "none") {
        rightdivhamburger.style.display = "block";
        nav.style.height="140px"
      } else {
        rightdivhamburger.style.display = "none";
        nav.style.height="80px"
      }
    };
