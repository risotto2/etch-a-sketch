let panel = document.getElementById('main');
let gridBtn = document.getElementById('gridBtn');

function createGrid(gridSize) {
    gridSizeSquaredRoot = gridSize;
    gridSize = gridSize * gridSize;
    console.log(gridSize);
    // creates a (gridSize)² amount of divs
    for (let pixelCount = 1; pixelCount <= gridSize; pixelCount++) {
        let div = document.createElement('div');
        div.id = 'div' + pixelCount;
        div.style.backgroundColor = 'white';
        div.onmouseover = () => {div.style.backgroundColor = randomRGBColor(256)};
        panel.appendChild(div);
    }
    // Same amount of rows and columns
    panel.style.gridTemplateColumns = 'repeat(' + gridSizeSquaredRoot + ', auto)';
    panel.style.gridTemplateRows = 'repeat(' + gridSizeSquaredRoot + ', auto)';
}

function randomRGBColor(value) {
    let red = Math.floor(Math.random() * value);
    let green = Math.floor(Math.random() * value);
    let blue = Math.floor(Math.random() * value);

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function ChangeSize() {
    // removes previous grid
    let initialSizeRoot = initialSize;
    initialSize = initialSize*initialSize;
    for (let pixelCount = 1; pixelCount <= initialSize; pixelCount++) {
        let div = document.getElementById('div' + pixelCount);
        panel.removeChild(div);
    }
    // asks for a new size (max. 100)
    let newInitialSize = prompt('Enter the new size: ', 'maximum size: 100');
    if (newInitialSize > 100 | isNaN(newInitialSize)) {
        alert('Invalid value. Initiating a grid with the previous value (' + initialSizeRoot + ').');
        createGrid(initialSizeRoot);
        initialSize = initialSizeRoot;
    } else {
        createGrid(newInitialSize);
        initialSize = newInitialSize;
    }
    
}

let initialSize = 16;

createGrid(16);
gridBtn.addEventListener('click', ChangeSize);