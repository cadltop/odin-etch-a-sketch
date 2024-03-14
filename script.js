function createGrid(squareVal) {
    const gridDiv = document.querySelector('.grid');

    for (let i1 = 1; i1 <= squareVal; i1++) {
        const newRowDiv = document.createElement('div');
        newRowDiv.classList.add('row');
        newRowDiv.classList.add(`r${i1}`);
        gridDiv.appendChild(newRowDiv);
        const rowDiv = document.querySelector(`.row.r${i1}`);

        for (let i2 = 1; i2 <= squareVal; i2++) {
            const newColumnDiv = document.createElement('div');
            newColumnDiv.classList.add('column');
            newColumnDiv.classList.add(`c${i2}`);
            rowDiv.appendChild(newColumnDiv);
        }
    }
}
function hoverEffect(squareVal) {
    for (let i1 = 1; i1 <= squareVal; i1++) {
        for (let i2 = 1; i2 <= squareVal; i2++) {
            const currentSquare = document.querySelector(`.r${i1} .c${i2}`);
            let dark = 0;
            currentSquare.addEventListener('mouseenter', () => {
                currentSquare.style.cssText = `background-color: hsl(${Math.round(Math.random() * 360)}
                    , 100%, 50%)`;
            });
        }
    }
}

let squareNum = 16;
createGrid(squareNum);
hoverEffect(squareNum);

const startButton = document.querySelector('button');

startButton.addEventListener('click', () => {
    const squarePrompt = parseInt(prompt('Enter the number of squares per side:', ''));

    if (squarePrompt > 100) {
        alert('That number was too large. Try again!');
    } else {
        switch (squareNum) {
            case 16:
                for (let i1 = 16; i1 >= 1; i1--) {
                    for (let i2 = 16; i2 >= 1; i2--) {
                        const columnSelect = document.querySelector(`.r${i1} .c${i2}`);
                        columnSelect.remove();
                    }
        
                    const rowSelect = document.querySelector(`.r${i1}`);
                    rowSelect.remove();
                }
                break;
            default:
                for (let i1 = squareNum; i1 >= 1; i1--) {
                    for (let i2 = squareNum; i2 >= 1; i2--) {
                        const columnSelect = document.querySelector(`.r${i1} .c${i2}`);
                        columnSelect.remove();
                    }
        
                    const rowSelect = document.querySelector(`.r${i1}`);
                    rowSelect.remove();
                }
                break;
        }
        squareNum = squarePrompt;
        createGrid(squarePrompt);
        hoverEffect(squarePrompt);        
    }
});