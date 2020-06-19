const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
// const breeds=Array.from(document.querySelectorAll("li"));
let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
  getImages(imgUrl);
  getBreeds(breedUrl);
});

function getImages(url) {
  fetch (url)
    .then(resp=> resp.json())
    .then(json=> addImages(json.message))

}

function addImages(images){
  const imageContainer = document.querySelector("#dog-image-container");
  images.forEach((image) => {
    let img = document.createElement('img');
    img.src= image
    imageContainer.appendChild(img);
  });

}


function getBreeds(url) {
  fetch (url)
    .then(resp=> resp.json())
    .then(json=> {
      breeds = Object.keys(json.message);
      addBreeds(breeds);
      addLetterSelector();
      })
}

function addBreeds(breeds){
  let breedsList = document.querySelector("#dog-breeds");
  removeBreeds(breedsList)
  breeds.forEach( breed => {
    addBreed(breed)
  })
};


function addBreed(breed){
  let breedsList = document.querySelector("#dog-breeds");
  let breedName = document.createElement('li');
  breedName.innerText = breed
  breedName.addEventListener("click",function () {
    breedName.style.color="red";
  })
  breedsList.appendChild(breedName);
}

function addBreedsByLetter(letter){
  addBreeds(breeds.filter(breed => breed.startsWith(letter)));
}



function removeBreeds(breeds) {
  let breed = breeds.lastElementChild;
  while (breed) {
    breeds.removeChild(breed);
    breed = breeds.lastElementChild;
  }
}

function addLetterSelector(){
  let selector=document.querySelector("#breed-dropdown")
  selector.addEventListener("change",function (event){
    addBreedsByLetter(event.target.value)
  })
}
