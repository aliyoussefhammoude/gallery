
fetch("./images.json") //1
     .then((response) => response.json()) //2
     .then((user) => {
         console.log(user); //3
         
    
    
        var imageOne = document.getElementById("imageOne");
        imageOne.src = user[0].url
    });