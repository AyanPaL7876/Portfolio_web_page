const project = new Typed('#typing', {
    strings: [
        `Ayan pal.`,
        `A Web developer.`,
        `A Programmer.`,
    ],

    typeSpeed: 70,
    backSpeed: 20,
    loop: true,
    cursorChar: ' ',
    
});


var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
var set_clock = setInterval(
function clock(){
  var date_now = new Date();
  var hr = date_now.getHours();
  var min = date_now.getMinutes();
  var sec = date_now.getSeconds();
  var calc_hr = (hr * 30) + (min / 2);
  var calc_min =    (min * 6)  ;
  var calc_sec = sec * 6 ;
  hour.style.transform = "rotate(" + calc_hr + "deg)";
  minute.style.transform = "rotate(" + calc_min + "deg)";
  seconds.style.transform = "rotate(" + calc_sec + "deg)";
}, 1000);


// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}