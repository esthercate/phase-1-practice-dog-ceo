console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
  .then(res => res.json())
  .then(data => {
    data.message.forEach(element => {
      let dogContainer = document.querySelector("#dog-image-container");
      let dogImage = document.createElement("img");
      dogImage.src = element;
      dogImage.style.height = "300px";
      dogImage.style.width = "300px";
      dogImage.style.margin = "10px";
      dogImage.style.borderRadius = "8px";
      dogContainer.appendChild(dogImage);
    });
  })

// fetch breeds
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
  .then(res => res.json())
  .then(dogBreed)

function dogBreed(dBreed) {
  for (let breed in dBreed.message) {
    let list = document.getElementById('dog-breeds');
    let li = document.createElement('li');
    li.innerHTML = breed;
    list.appendChild(li);

    //Change li color on click event
    li.addEventListener("click", () => {
      li.style.color = "Red";
    })
  }
}

//Filter functionality
document.addEventListener("DOMContentLoaded", () => {
  let selectElements = document.querySelector('#breed-dropdown');
  if (selectElements) {
    selectElements.addEventListener('change', selected)
  }

  function selected() {
    let myresult = selectElements.value;
    fetch(breedUrl)
      .then(res => res.json())
      .then(dogBreedCode)

    function dogBreedCode(dBread) {
      console.log(myresult)
      document.getElementById("dog-breeds").innerHTML = '';
      for (let breed in dBread.message) {
        if (breed.charAt(0) === myresult.charAt(0)) {
          let lists = document.getElementById('dog-breeds');
          let li = document.createElement('li');
          li.innerHTML = breed;
          console.log(breed);
          lists.appendChild(li);
          li.addEventListener("click", () => {
            li.style.color = "Red";
          })
        }
      }
    }
  }
})