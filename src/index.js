console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs()
  fetchBreeds()
})

function fetchDogs() {
fetch('https://dog.ceo/api/breeds/image/random/4')
	.then(resp => resp.json())
	.then(json => renderDogs(json))
}

function fetchBreeds() {
	fetch('https://dog.ceo/api/breeds/list/all')
	.then(resp => resp.json())
	.then(json => renderBreeds(json))
}


function renderDogs(dogs) {
	const div = document.querySelector('div')
	dogs.message.forEach(dog => {
		const img = document.createElement('img')
		img.src = dog
		div.appendChild(img)
	})
}

function renderBreeds(breeds) {
	const ul = document.querySelector('ul')
	const array = []
		Object.keys(breeds.message).forEach(breed => {
			const li = document.createElement('li')
			li.innerHTML = breed
			ul.appendChild(li)
			li.addEventListener("click", function(){
				this.style.color = 'red';
			})
			array.push(breed)
		})

	let filter = document.getElementById('breed-dropdown')	
	filter.addEventListener('change', function() {
		if (filter.value === "b") {
			console.log("hi")
		}
		else if (filter.value === "a") {
			console.log("hey")
		}
		else if (filter.value === "c") {
			console.log("sup")
		}
		else if (filter.value === "d") {
			console.log("yo")
		}
		else console.log("all")
	})
}






