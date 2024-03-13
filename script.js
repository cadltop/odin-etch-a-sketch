function createGrid() {
    const gridDiv = document.querySelector('.grid');

    for (let i1 = 1; i1 <= 16; i1++) {
        const newRowDiv = document.createElement('div');
        newRowDiv.classList.add('column');
        newRowDiv.classList.add(`c${i1}`);
        gridDiv.appendChild(newRowDiv);
        const rowDiv = document.querySelector(`.column.c${i1}`);

        for (let i2 = 1; i2 <= 16; i2++) {
            const newColumnDiv = document.createElement('div');
            newColumnDiv.classList.add('row');
            newColumnDiv.classList.add(`r${i2}`);
            rowDiv.appendChild(newColumnDiv);
        }
    }
}

createGrid();