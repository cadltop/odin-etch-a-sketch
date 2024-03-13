function createGrid() {
    const gridDiv = document.querySelector('.grid');

    for (let i1 = 1; i1 <= 16; i1++) {
        const newRowDiv = document.createElement('div');
        newRowDiv.classList.add('row');
        newRowDiv.classList.add(`r${i1}`);
        gridDiv.appendChild(newRowDiv);
        const rowDiv = document.querySelector(`.row.r${i1}`);

        for (let i2 = 1; i2 <= 16; i2++) {
            const newColumnDiv = document.createElement('div');
            newColumnDiv.classList.add('column');
            newColumnDiv.classList.add(`c${i2}`);
            rowDiv.appendChild(newColumnDiv);
        }
    }
}

createGrid();