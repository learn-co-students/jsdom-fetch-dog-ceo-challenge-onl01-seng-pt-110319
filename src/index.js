document.addEventListener("DOMContentLoaded", function () {
	const breedLinest = document.getElementById("dog-breeds");
	const dropdown = document.getElementById("breed-dropdown");

	dropdown.addEventListener("change", function (event) {
		filterBreeds(event.target.value);
	});

	breedLinest.addEventListener("click", function (event) {
		event.target.style.color = "green";
	});

	fetchImages();
	fetchBreeds();
});

function fetchImages() {
	const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
	fetch(imgUrl)
		.then((response) => response.json())
		.then((json) => showImages(json.message));
}

function showImages(images) {
	const imageDiv = document.getElementById("dog-image-container");
	images.forEach((image) => {
		const imageTag = document.createElement("img");
		imageTag.src = image;
		imageDiv.appendChild(imageTag);
	});
}

let breedsArr = [];

function fetchBreeds() {
	const breedsUrl = "https://dog.ceo/api/breeds/list/all";
	fetch(breedsUrl)
		.then((response) => response.json())
		.then((json) => showBreeds(json));
}

function showBreeds(breeds) {
	const breedsSection = document.getElementById("dog-breeds");
	breedKeys = Object.keys(breeds.message);
	breedKeys.forEach((breed) => {
		breedsArr.push(breed);
		const breedLine = document.createElement("li");
		breedLine.innerText = breed;
		breedLine.style.cursor = "pointer";
		breedsSection.appendChild(breedLine);
	});
}

function filterBreeds(letter) {
	const breedsSection = document.getElementById("dog-breeds");
	let child = breedsSection.lastElementChild;
	while (child) {
		breedsSection.removeChild(child);
		child = breedsSection.lastElementChild;
	}
	let filtered = breedsArr.filter((breed) => breed.startsWith(letter));
	filtered.forEach((breed) => {
		const breedLine = document.createElement("li");
		breedLine.innerText = breed;
		breedsSection.appendChild(breedLine);
	});
}
