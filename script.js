function hamburgerMenu_change(x) {
    x.classList.toggle("change");
  }
  function hamburgerMenu() {
    var x = document.getElementById("hamburger-backgorund");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function box_centrale() {
    var x = document.getElementById("centrale");
    var bar1 = document.getElementById("tendina-bar1");
    var bar2 = document.getElementById("tendina-bar2");
    if (x.style.display === "block") {
      x.style.display = "none";
      x.style.height = "0px"
      bar1.style.transform = "rotate(45deg) translate(8.5px, -8.5px)";
      bar2.style.transform = "rotate(135deg) translate(8px, 8px)";
    } else {
      x.style.display = "block";
      x.style.height = "auto"
      bar1.style.transform = "rotate(45deg) translate(2.5px, -2.5px)";
      bar2.style.transform = "rotate(135deg) translate(2px, 2px)";
  
    }
  }
  function hamburgerBackgorund() {
    
    var x = document.getElementById("hamburger-backgorund");
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    
  }
  
  
  