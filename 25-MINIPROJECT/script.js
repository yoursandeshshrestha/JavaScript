const imageContainer = document.querySelector(".imageContainer");
const btn = document.querySelector(".Btn");

function generateImg() {
    imageContainer.innerHTML = '';
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const image = document.createElement("img");
        image.src = data.message;
        imageContainer.appendChild(image);
    })
    .catch(error => {
        console.error('Error:', error); // Handle any errors
    });
}

btn.addEventListener("click", generateImg);
