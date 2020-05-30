breeds = [];

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
})

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/9"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImage(json.message));

}

function renderImage(dogImages) {
    const container = document.getElementById('dog-image-container');
    dogImages.forEach(dogImage => {
        const img = document.createElement('img');
        img.src = dogImage;
        img.style.width = "200px"
        img.style.marginLeft = "10px"
        container.appendChild(img);
    })
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(results => {
            breeds = Object.keys(results.message);
            updateList(breeds);
            addSelectBreed();
        });
}

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let list = document.createElement('li');
    list.innerText = breed;
    ul.appendChild(list);
    list.style.cursor = 'pointer';
    list.addEventListener('click', updateColor);
}

function updateColor(event) {
    event.target.style.color = 'purple';
}

function updateList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function breedsStartingWith(letter) {
    updateList(breeds.filter(breed => breed.startsWith(letter)));
}

function addSelectBreed() {
    let dropDown = document.querySelector('#breed-dropdown');
    dropDown.addEventListener('change', function(event) {
        breedsStartingWith(event.target.value);
    });
}
