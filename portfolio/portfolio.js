//Navbar toggle when on mobile screens
function classToggle()
{
  const navs = document.querySelectorAll('.navigation')
  navs.forEach(nav => nav.classList.toggle('toggle-show'));
};

document.querySelector('.toggle')
.addEventListener('click', classToggle);

//Sticky navbar when scrolling
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar()
{
  if (window.pageYOffset > sticky)
  {
    navbar.classList.add("sticky")
  } else
  {
    navbar.classList.remove("sticky");
  }
}
