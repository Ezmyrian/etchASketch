function createDivs(size = 16) {
    let container = document.querySelector(".container");
    for (let i = 1; i <= size; i++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add(`column${i}`, `child`);
        columnDiv.style.cssText = "display: flex; flex-direction: column; flex: 1 1 auto;"
        container.appendChild(columnDiv);
        for (let j = 1; j <= size; j++) {
            let column = document.querySelector(`.column${i}`);
            let rowDiv = document.createElement('div');
            rowDiv.classList.add("row", "child");
            rowDiv.style.cssText = "display: flex; flex: 1 1 auto; border: black 1px solid;"
            column.appendChild(rowDiv);
        }
    }
}
createDivs()

function addBackgroundColorChanger() {
    let divs = document.querySelectorAll('.row');
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "black"
        })
    });
}
addBackgroundColorChanger()

function addHeaderContent (newGridSize = 16) {
    const header = document.querySelector('.header');
    const text = document.createElement('p');
    text.classList.add("text");
    text.textContent = `Grid size: ${newGridSize}`
    header.append(text);
    addNewGridButton();
}
addHeaderContent();

function addNewGridButton () {
    const header = document.querySelector(".header");
    const newGridButton = document.createElement('button');
    newGridButton.textContent = "New Grid";
    newGridButton.style.backgroundColor = "white";
    header.append(newGridButton);
    newGridButton.addEventListener('click', () => {
        let newGridSize = +prompt("How big would you like the grid to be?", "Default 16, Max 100");
        if (newGridSize < 16 || newGridSize == NaN) {
            newGridSize = 16;
        }
        else if (newGridSize > 100) {
            newGridSize = 100;
        }
        
        removeContent()
        createDivs(newGridSize);
        addBackgroundColorChanger()
        addHeaderContent(newGridSize)
    })
}

function removeContent() {
    let childDivs = document.querySelectorAll(".child");
    childDivs.forEach((child) => {
        child.remove();
    })

    let header = document.querySelector(".header");
    header.replaceChildren();
}