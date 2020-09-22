// var nav = document.getElementById("navbar")
// var mobile = document.getElementById("mobile-nav"),
//   nav2 = mobile.getElementsByClassName("nav-panel")[0]


// window.onpopstate = () => {
//   make_active(nav)
//   make_active(nav2)
// }

// function make_active(nav) {
//   var anchor = nav.getElementsByTagName('a')
//   var current = window.location.pathname.split('/')[1].split('#')[0];
//   for (let i = 0; i < anchor.length; i++) {
//     const element = anchor[i];
//     if (element.id.split("to")[1].toLowerCase() == current) {
//       element.className = "active";
//       if (element.hasAttribute('name')) {
//         var name = element.getAttribute("name")
//         element.innerText = name.toUpperCase()
//       }
//     } else {
//       element.classList.remove('active')
//       if (element.hasAttribute('name')) {
//         var icon = element.getAttribute("icon")
//         element.innerHTML = '<i class="fas ' + icon + ' fa-lg"></i>'
//       }
//     }
//   }
// }
