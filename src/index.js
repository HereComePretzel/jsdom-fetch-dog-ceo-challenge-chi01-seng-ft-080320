

function fetchImages(){
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {return response.json();
    })
    .then(function(object) {
        let images = object["message"]
        images.forEach(image => createImage(image))
        debugger
    })
    
}
function fetchDogBreeds(){
fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {return response.json();
    })
    .then(function(object) {
        let breeds = object["message"]
        for(const key in breeds) {
            if (breeds[key].length < 1) {
                createDogList(key)
            } else {
                let dogLength = breeds[key]
                createDogList(key, dogLength[0])
                
            } 
                
        }
    })
    
}

function createImage(image){
    let imageElement = document.createElement('img')
    imageElement.src = image
    let dogStuff = document.getElementById("dog-image-container")
    dogStuff.append(imageElement)

}
function createDogList(dog, dogLength='ERROR'){
    let dogElement = document.createElement('li')
    let dogString = ""
    if (dogLength !== 'ERROR'){
        dogString = `${dog} - ${dogLength}`
    }
    else
    {dogString = dog}
    dogElement.innerText = dogString
    dogElement.addEventListener('click', changeColor)
    let dogStuff = document.getElementById("dog-breeds")
    dogStuff.append(dogElement)

}

const selectElement = document.querySelector('#breed-dropdown');

selectElement.addEventListener('change', (event) => {
  let dogLetterChoice = event.target.value
});


function changeColor(event) 
{event.target.style.color = "red"; return false;}





fetchImages()
fetchDogBreeds()


console.log('%c HI', 'color: firebrick')

// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// dropdown.

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet

