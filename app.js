
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while(lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

fetch("./images.json") //1
     .then((response) => response.json()) //2
     .then((user) => {
         console.log(user); //3
         
    
    
        var imageOne = document.getElementById("imageOne");
        var imageOneTitle = document.getElementById("imageOneTitle")
        var imageOneTag = document.getElementById("imageOneTag")
        imageOne.src = user[0].url
        imageOneTitle.innerHTML = user[0].title;
        imageOneTag.innerHTML = user[0].description;

        var imageTwo = document.getElementById("imageTwo");
        var imageTwoTitle = document.getElementById("imageTwoTitle")
        var imageTwoTag = document.getElementById("imageTwoTag")
        imageTwo.src = user[1].url
        imageTwoTitle.innerHTML = user[1].title;
        imageTwoTag.innerHTML = user[1].description;

        var imageThree = document.getElementById("imageThree");
        var imageThreeTitle = document.getElementById("imageThreeTitle")
        var imageThreeTag = document.getElementById("imageThreeTag")
        imageThree.src = user[2].url
        imageThreeTitle.innerHTML = user[2].title;
        imageThreeTag.innerHTML = user[2].description;

        var imageFour = document.getElementById("imageFour");
        var imageFourTitle = document.getElementById("imageFourTitle")
        var imageFourTag = document.getElementById("imageFourTag")
        imageFour.src = user[3].url
        imageFourTitle.innerHTML = user[3].title;
        imageFourTag.innerHTML = user[3].description;
    });