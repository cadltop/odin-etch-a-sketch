function createGrid() {
    const gridDiv = document.querySelector('.grid');
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');

    for (let i1 = 1; i1 <= 16; i1++) {
        for (let i2 = 1; i2 <= 16; i2++) {
            gridDiv.appendChild(squareDiv);
        }
    }
}

createGrid();