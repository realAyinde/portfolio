import about from './about.js'
import contact from './contact.js'
import home from './home.js'
import skills from './skills.js'
import work from './work.js'


const routes = {
  '/': home,
  '/about': about,
  '/contact': contact,
  '/skills': skills,
  '/work': work
}

var nav = document.getElementById("navbar")
var mobile = document.getElementById("mobile-nav"),
  nav2 = mobile.getElementsByClassName("nav-panel")[0]


const rootDiv = document.getElementById('root');
remove_hash_from_url()
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  remove_hash_from_url()
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
  remove_hash_from_url()
  rootDiv.innerHTML = routes[window.location.pathname]
  make_active(nav)
  make_active(nav2)
}

const routing = ['home', 'about', 'contact', 'skills', 'work']
routing.forEach(href => {
  var routes = Array.from(document.querySelectorAll(`[to="${href}"]`))
  routes.forEach(route => {
    if (href === 'home') {
      route.addEventListener("click", function () { onNavigate(`/`) })
    } else {

      route.addEventListener("click", function () { onNavigate(`/${href}`) })
    }
  })

})


function make_active(nav) {
  var anchor = nav.getElementsByTagName('a')
  var current = window.location.pathname.split('/')[1].split('#')[0];
  console.log(typeof (current))
  for (let i = 0; i < anchor.length; i++) {
    const element = anchor[i];
    if (element.getAttribute("to")==current || (element.getAttribute("to")=='home' && current=='')) {
      element.className = "active";
      if (element.hasAttribute('name')) {
        var name = element.getAttribute("name")
        element.innerText = name.toUpperCase()
      }
    } else {
      element.classList.remove('active')
      if (element.hasAttribute('name')) {
        var icon = element.getAttribute("icon")
        element.innerHTML = '<i class="fas ' + icon + ' fa-lg"></i>'
      }
    }
  }
  remove_hash_from_url()
}

function remove_hash_from_url(params) {
  var url = window.location.toString()

  if (url.indexOf('#') > 0) {
    var clean_url = url.substring(0, url.indexOf("#"))
    window.history.replaceState({}, document.title, clean_url)
  }
}
