// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Get the Active Link
const navLinkEls = document.querySelectorAll('.nav-link');
const windowPathName = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  const navLinkPathName = new URL(navLinkEl.href).pathname;

  if((windowPathName === navLinkPathName) || (windowPathName === '/index.html' && navLinkPathName === '/')){
      navLinkEl.classList.add('active');
  }
});

    
//Designing Footer


//---------------------------------