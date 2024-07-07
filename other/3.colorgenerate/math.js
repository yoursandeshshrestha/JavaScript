let btn = document.getElementById('myBtn');

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

btn.addEventListener('click', generateRandomColor);
