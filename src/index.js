console.log('%c HI', 'color: firebrick')

let breedsArr = [];

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(response => response.json())
    .then(json => renderImg(json.message));
}

function renderImg(images) {
    const imgDiv = document.getElementById("dog-image-container");
    images.forEach(image => {
        const imgTag = document.createElement("img")
        imgTag.src = image
        imgDiv.appendChild(imgTag)
    });
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(breeds) {
    const breedsUl = document.getElementById("dog-breeds");
    breedKeys = Object.keys(breeds.message)
    breedKeys.forEach(breed => {
        breedsArr.push(breed);
        const liTag = document.createElement("li")
        liTag.innerText = breed
        breedsUl.appendChild(liTag)
    });
}

function filterBreeds(letter) {
    const breedsUl = document.getElementById("dog-breeds");
    let child = breedsUl.lastElementChild;
    while (child) {
        breedsUl.removeChild(child);
        child = breedsUl.lastElementChild;
    };
    let filtered = breedsArr.filter(breed => breed.startsWith(letter));
    filtered.forEach(breed => {
        const liTag = document.createElement("li")
        liTag.innerText = breed
        breedsUl.appendChild(liTag)
    });
}




document.addEventListener('DOMContentLoaded', function() {
    const breedList = document.getElementById("dog-breeds");
    const ulChildren = breedList.children;
    const select = document.getElementById("breed-dropdown")

    select.addEventListener("change", function(event) {
        filterBreeds(event.target.value);
    });

    breedList.addEventListener("click", function(event){
        event.target.style.color = "green";
        });

    fetchImages();
    fetchBreeds();
  });
