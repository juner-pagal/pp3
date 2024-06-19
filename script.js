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

//Designing Review section
const url = 'https://local-business-data.p.rapidapi.com/business-reviews?business_id=0x89c259b5a9bd152b%3A0x31453e62a3be9f76&limit=5&sort_by=most_relevant&region=us&language=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '417df4c886mshbe149c863baf4c7p18bfaajsna5a4dacc9762',
		'x-rapidapi-host': 'local-business-data.p.rapidapi.com'
	}
};


let list;

let all  = document.getElementById('review');
//asynch operation = promise

fetch(url, options).then(response => response.json())
.then(response => {
    console.log(response.data);
    list = response.data;


let reviewRow = document.createElement('div');
reviewRow.classList.add('row');

    list.forEach((item) => {
       let b = document.createElement('div');
       b.classList.add('card');
       b.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${item.author_name}</h5>
                    <p class="card-text card-text-justify"> ${item.review_text}</p>
                </div>
           `
         all.append(reviewRow);
         reviewRow.appendChild(b);
    })
})

//End of Review Section
    
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
fetch('https://psgc.cloud/api/cities-municipalities')
  .then(res => {
    return res.json();
  })
  .then(data => {
    // data.forEach(item => {
    //   console.log(data[1064].name);
    // })
    let myFooter = document.querySelector("footer");
      let footerDiv = document.createElement("div");
      footerDiv.classList.add("row");

      let footerContents = `
                    <div class="col-lg-4">
                      <p>Copyright &copy 2024</p>
                    </div>
                    <div class="col-lg-4">
                      <p>${data[1064].name}, Philippines</p>
                    </div>
                    <div class="col-lg-4">
                      <p>+639668338043</p>
                    </div>`;
      footerDiv.innerHTML = footerContents;

      myFooter.append(footerDiv);
  })

//---------End of Footer----------------
