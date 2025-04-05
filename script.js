let container = document.querySelector(".container");

function createDivs(size = 16) {
    for (let i = 1; i <= size; i++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add(`column${i}`);
        columnDiv.style.cssText = "display: flex; flex-direction: column; flex: 1 1 auto;"
        container.appendChild(columnDiv);
        for (let j = 1; j <= size; j++) {
            let column = document.querySelector(`.column${i}`);
            let rowDiv = document.createElement('div');
            rowDiv.classList.add("row");
            rowDiv.style.cssText = "display: flex; flex: 1 1 auto; border: black 1px solid;"
            column.appendChild(rowDiv);
        }
    }
}
createDivs()

let divs = document.querySelectorAll('.row');
divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "black"
    })
});

const header = document.querySelector('.header');
const newGridButton = document.createElement('button');
newGridButton.textContent = "New Grid";
header.appendChild(newGridButton);
newGridButton.addEventListener('click', () => {
    let newGridSize = +prompt("How big would you like the grid to be?", "Default 16, Max 100");
    console.log(newGridSize)
    if (newGridSize < 16) {
        createDivs();
        header.textContent = `Grid size: 16`
    }
    else if (newGridSize > 100) {
        createDivs(100);
        header.textContent = `Grid size: 100`
    }
    else {
        createDivs(newGridSize);
        header.textContent = `Grid size: ${newGridSize}`
    }
})
