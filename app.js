const container = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("colorContainer");
    container.appendChild(colorContainer);
}

const colorContainerAll = document.querySelectorAll(".colorContainer");

function randomColor() {
    const r  = Math.floor(Math.random() * 255);
    const g  = Math.floor(Math.random() * 255);
    const b  = Math.floor(Math.random() * 255);
    
    return color = `rgb(${r}, ${g}, ${b})`;
}

function generateColor() {
    colorContainerAll.forEach((colorContainer) => {
        const newColor = randomColor();
        colorContainer.style.backgroundColor = newColor;
        colorContainer.innerText = newColor;
        
    })
}

