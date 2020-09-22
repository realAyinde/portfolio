var mobileNav = document.getElementById("mobile-nav"),
panel = mobileNav.getElementsByClassName("nav-panel")[0]


document.getElementById("show-panel").addEventListener("click", showPanel);
document.getElementById("open-social").addEventListener("click", showSocial);


//function showing menu-panel
function showPanel() {
  this.classList.toggle("clicked")

  if (!panel.style.display) {
    panel.style.display = "none"
  }

  (panel.style.display === "none") ? slideIn(panel) : slideOut(panel);
}

// Showing my social icons function
function showSocial() {
  var socialPanel = document.getElementById("social-panel")

  var iconRight = document.createElement("I")
  iconRight.classList.add("fas", "fa-angle-right")

  var iconLeft = document.createElement("I")
  iconLeft.classList.add("fas", "fa-angle-left")

  this.classList.toggle("clicked")

  while (this.hasChildNodes()) {
    this.removeChild(this.childNodes[0])
  }

  !this.classList.contains("clicked") ? this.appendChild(iconLeft) : this.appendChild(iconRight);

  if (!socialPanel.style.display) {
    socialPanel.style.display = "none"
  }

  (socialPanel.style.display === "none") ? slideIn(socialPanel) : slideOut(socialPanel);
}

// Slide-in function
function slideIn(panel) {
  panel.style.display = "flex";
  if (!panel.style.left) {
    panel.style.left = "100%"
  }
  var slideEffect = setInterval(() => {
    if (parseFloat(panel.style.left) > 0) {
      panel.style.left = parseFloat(panel.style.left) - 1 + "%"
    } else {
      clearInterval(slideEffect)
      panel.style.display = "flex";
    }
  }, 1);
}

// Slide-out function
function slideOut(panel) {
  panel.style.display = "flex";
  panel.style.left = "0%"
  var slideEffect = setInterval(() => {
    if (parseFloat(panel.style.left) < 100) {
      panel.style.left = parseFloat(panel.style.left) + 1 + "%"
    } else {
      clearInterval(slideEffect)
      panel.style.display = "none";
    }
  }, 1);
}
