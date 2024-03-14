function createGrid(squareNum) {
    const gridDiv = document.querySelector('.grid');

    for (let i1 = 1; i1 <= squareNum; i1++) {
        const newRowDiv = document.createElement('div');
        newRowDiv.classList.add('row');
        newRowDiv.classList.add(`r${i1}`);
        gridDiv.appendChild(newRowDiv);
        const rowDiv = document.querySelector(`.row.r${i1}`);

        for (let i2 = 1; i2 <= squareNum; i2++) {
            const newColumnDiv = document.createElement('div');
            newColumnDiv.classList.add('column');
            newColumnDiv.classList.add(`c${i2}`);
            rowDiv.appendChild(newColumnDiv);
        }
    }
}
function hoverEffect(squareNum) {
    for (let i1 = 1; i1 <= squareNum; i1++) {
        for (let i2 = 1; i2 <= squareNum; i2++) {
            const currentSquare = document.querySelector(`.r${i1} .c${i2}`);
            currentSquare.addEventListener('mouseenter', () => {
                currentSquare.style.cssText = 'background-color: red;'
            });
        }
    }
}

const startButton = document.querySelector('button');

startButton.addEventListener('click', () => {
    const squareNum = parseInt(prompt('Enter the number of squares per side:', ''));

    if (squareNum > 100) {
        alert('That number was too large. Try again!');
    } else {
        for (let i1 = 16; i1 >= 1; i1--) {
            for (let i2 = 16; i2 >= 1; i2--) {
                const columnSelect = document.querySelector(`.r${i1} .c${i2}`);
                columnSelect.remove();
            }

            const rowSelect = document.querySelector(`.r${i1}`);
            rowSelect.remove();
        }
        createGrid(squareNum);
        hoverEffect(squareNum);        
    }
});

let squareNum = 16;
createGrid(squareNum);
hoverEffect(squareNum);