console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function apiRequest(url){
  return fetch(url)
    .then(resp => resp.json())
    .then(json => addImg(json))
}



function addImg(obj){
  obj.forEach(obj => {
    
  })
}

document.addEventListener('DOMContentLoaded', function(){  //Listening for on page load
  apiRequest(imgUrl)
  
  
  
  
})
