console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", (event) =>{

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedsArr = []

fetch(imgUrl)
    .then(response=>response.json())
    .then(json=>createImages(json))



function createImages(json){
    const container=document.querySelector("#dog-image-container")
    json.message.forEach(function(dog){
        const img=document.createElement("IMG")
       img.src=dog
        container.appendChild(img)
    })
}

fetch(breedUrl)
    .then(response=>response.json())
    .then(json=>dogBreed(json))


    
function dogBreed(json){
    const breed=json.message
    const list=document.querySelector("#dog-breeds")

    Object.keys(breed).forEach(function(breedName) {
        let li=document.createElement("li")
        li.textContent=breedName
        list.appendChild(li)
    })
    
}

const ulList=document.querySelector("#dog-breeds")
ulList.addEventListener("click",function(event){
    event.target.style.color="blue"
})



});