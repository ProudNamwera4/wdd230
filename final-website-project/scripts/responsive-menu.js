/*Responsive Menu */
function myFunction() {
    var x = document.getElementById("myLinks");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else if (x.matches && x.style.display == "block"){
      x.style.display = "flex";
      x.setAttribute("flex-direction","row");
    }
    else {
      x.style.display = "block";
    }
  }

  let x = window.matchMedia("max-width:768")
  