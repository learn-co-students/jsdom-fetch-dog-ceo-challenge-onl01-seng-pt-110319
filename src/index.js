// console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", (event) => {

    function fetchPictures() {
                const imgUrl = fetch("https://dog.ceo/api/breeds/image/random/4")
                .then (response => response.json())
                .then (json => applyImages(json))    
                }

    fetchPictures();
    
    function applyImages(dogs) {
        const container = document.getElementById('dog-image-container');
        
        let response = dogs.message;

        response.forEach(function(dog) {
            const img = document.createElement("IMG");
            img.src = dog;
                container.appendChild(img);
             });

    };


    
    function fetchBreeds() {
        
        const breedUrl = "https://dog.ceo/api/breeds/list/all"
                fetch(breedUrl)
                .then (response => response.json())
                .then (json => showBreeds(json))      
                
    };
    
    fetchBreeds()
    
    function showBreeds(breed) {
        let response = breed.message
        const getUl = document.getElementById("dog-breeds")

        Object.keys(response).forEach(function(breedName) {
            const liTag = document.createElement('li');
            liTag.textContent = breedName;
            getUl.appendChild(liTag);
        })

        
        
    };


    let ulTag = document.getElementById('dog-breeds')
    ulTag.addEventListener("click", function(event) {
        event.target.style.color = 'blue';
    })
    

    
        const dropdown = document.getElementById('breed-dropdown').addEventListener('change', function(event) {

            let input = document.getElementById('breed-dropdown').value
            const list = document.getElementById('dog-breeds').innerText;

            if (input === 'a') {
                // do something
                // let test = list.toString()
            }  
             else if (input === 'b') {
                 // do something
            }
            else if (input === 'c') {
                // do something
            } 
            else if (input === 'd') {
                // do something
            }

        
        })

    

});



