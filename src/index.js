document.addEventListener("DOMContentLoaded", function () {
	const breedSection = document.getElementById("dog-breeds");
	const dropdown = document.getElementById("breed-dropdown");

	dropdown.addEventListener("change", function (event) {
		filterBreeds(event.target.value);
	});

	breedSection.addEventListener("click", function (event) {
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
	const breedSection = document.getElementById("dog-breeds");
	breedKeys = Object.keys(breeds.message);
	breedKeys.forEach((breed) => {
		breedsArr.push(breed);
		const breedLine = document.createElement("li");
		breedLine.innerText = breed;
		breedLine.style.cursor = "pointer";
		breedSection.appendChild(breedLine);
	});
}

function filterBreeds(letter) {
	const breedSection = document.getElementById("dog-breeds");
	let child = breedSection.lastElementChild;
	while (child) {
		breedSection.removeChild(child);
		child = breedSection.lastElementChild;
	}
	let filtered = breedsArr.filter((breed) => breed.startsWith(letter));
	filtered.forEach((breed) => {
		const breedLine = document.createElement("li");
		breedLine.innerText = breed;
		breedSection.appendChild(breedLine);
	});
}
