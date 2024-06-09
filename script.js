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
let readyToGrow = document.getElementById("ready-to-grow");
let readyToGrowContent = `
      <div class="col"></div>
        <div class="col-md-6">
            <h3>Ready to grow</h3>
            <h1>Get your free quote today</h1>
                <form action="#">
                    <div class="form-floating mb-3">
                        <input type="url" class="form-control" id="web-url" placeholder="Web URL" required>
                        <label for="web-url">Web URL</label>
                    </div>
                    <div class="form-floating">
                        <input type="email" class="form-control" id="email" placeholder="Email" required>
                        <label for="email">Email</label>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit Now</button>
                      </div>
                </form>
        </div>
        <div class="col"></div>`;

readyToGrow.innerHTML = readyToGrowContent;
// readyToGrow.append(readyDivs);

//---------------------------------------------------------
let myFooter = document.querySelector("footer");
let footerDiv = document.createElement("div");
footerDiv.classList.add("row");

let footerContents = `
              <div class="col-lg-4">
              <p>Copyright &copy 2024</p>
              </div>
              <div class="col-lg-4">
              <p>Metro Manila, Philippines</p>
              </div>
              <div class="col-lg-4">
              <p>+639668338043</p>
              </div>`;
footerDiv.innerHTML = footerContents;

myFooter.append(footerDiv);

//---------End of Footer----------------