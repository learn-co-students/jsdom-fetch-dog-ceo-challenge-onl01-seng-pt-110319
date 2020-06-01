// console.log('%c HI', 'color: firebrick')



const breedsArr = []
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

    filterBreeds();

    
        const dropdown = document.getElementById('breed-dropdown').addEventListener('change', function(event) {
            

            
            filterBreeds(event.target.value);


        
        })

    

});



