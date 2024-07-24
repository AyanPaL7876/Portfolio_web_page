const project = new Typed('#typing', {
    strings: [
        `Web Developer.`,
        `Full stack Developer.`,
        `Programmer.`,
        `UI/UX Developer`
    ],

    typeSpeed: 70,
    backSpeed: 20,
    loop: true,
    cursorChar: ' ',
    
});


window.oncontextmenu = () =>{
  return false;
}