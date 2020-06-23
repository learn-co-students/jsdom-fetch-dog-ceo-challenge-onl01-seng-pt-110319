
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function loadImages() {
  fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

document.addEventListener('DOMContentLoaded', function(){  //Listening for on page load
  fetchImages();
  
  
  
  
}) // to come back to ----
