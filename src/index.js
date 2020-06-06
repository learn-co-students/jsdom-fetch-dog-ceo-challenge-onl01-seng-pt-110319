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
		 	let result = array.filter(dog => dog.startsWith("b"))
		 	ul.innerHTML = result
		}
		else if (filter.value === "a") {
			let result_1 = array.filter(dog => dog.startsWith("a"))
		 	ul.innerHTML = result_1
		}
		else if (filter.value === "c") {
			let result_2 = array.filter(dog => dog.startsWith("c"))
		 	ul.innerHTML = result_2
		}
		else if (filter.value === "d") {
			let result_3 = array.filter(dog => dog.startsWith("d"))
		 	ul.innerHTML = result_3
		}
		else console.log("all")
	})
}






