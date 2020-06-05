console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', e => {
    fetchImages();
    fetchDogBreeds();
    const select = document.querySelector("#breed-dropdown")
    select.addEventListener("change", (e) => {
        filterBreeds(e.target.value);
    });
});

const breedsArr = [];

const fetchImages = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(results => addImages(results.message));
}

const addImages = (images) => {
    const div = document.querySelector('#dog-image-container');
    images.forEach(image => {
        const img = document.createElement('IMG');
        img.src = image
        div.appendChild(img)
    });
}

const fetchDogBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(results => viewBreeds(results));
}

const viewBreeds = (breeds) => {
    const dogBreeds = Object.keys(breeds.message);
    dogBreeds.forEach(dogBreed => {
        breedsArr.push(dogBreed);
        addBreed(dogBreed);
    });
}

const addBreed = (dogBreed) => {
    const ul = document.querySelector('#dog-breeds');
    const li = document.createElement('li');
    li.textContent = dogBreed
    ul.appendChild(li);
    li.addEventListener('click', () => {
        if(li.style.color === 'black') {
            li.style.color = 'green';
        } else {
            li.style.color = 'black';
        }
    });
}

function filterBreeds(letter) {
    const ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    let filtered = breedsArr.filter(breed => breed.startsWith(letter));
    filtered.forEach(dogBreed => {
        addBreed(dogBreed);
    });
}

const removeChildren = (element) => {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}
