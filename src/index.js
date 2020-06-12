function fetchDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderDogImages(json.message))
}

function renderDogImages (images) {
    const imageContainer = document.querySelector('#dog-image-container');
    images.forEach(imageURL => {
        const img = document.createElement('img');
        img.src = imageURL;
        imageContainer.appendChild(img);
    });
}



window.addEventListener("DOMContentLoaded", event => {
    console.log('%c DOM has been successfully loaded!', 'color: green');
    fetchDogImages();
    console.log('%c Images have finished loading', 'color: green');
});