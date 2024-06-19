


// var API_KEY = '31242946-39fc46c4b4d0a781e7cf4d0de';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

// ---------------------------------------------------------
// let list;
// let all = document.getElementById('sample');
// const url = 'https://pixabay.com/api/?key=31242946-39fc46c4b4d0a781e7cf4d0de&q=yellow+flowers&image_type=photo';

fetch('https://pixabay.com/api/?key=31242946-39fc46c4b4d0a781e7cf4d0de&q=web+design&image_type=photo')
  .then(res => {
    return res.json();
  })
  .then(data => {
    // data.forEach(item => {
    //   console.log(data[1064].name);
    // })
    // console.log(data.hits[0]);    
    for(let i = 0; i <= 5; i++)
        {
            let mySample = document.getElementById("sample");
            let sampleDiv = document.createElement("div");
            sampleDiv.classList.add("row");
            let sampleContents =
                 `
                      <img src="${data.hits[i].largeImageURL}">
                
                `;
            sampleDiv.innerHTML = sampleContents;

            mySample.append(sampleDiv);
        }
      
  })