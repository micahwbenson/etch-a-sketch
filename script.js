function genGrid(v) {
    let container = document.getElementById('container');
    container.innerHTML = '';

    container.style.gridTemplateRows = 'repeat('+v+', 1fr)';
    container.style.gridTemplateColumns = 'repeat('+v+', 1fr)';

    for (let rows = 0; rows < v; rows++) {
            for (let cols = 0; cols < v; cols++) {
                let box = document.createElement('div');
                box.id = 'box';
                container.appendChild(box);
            }
    };
};

function resetGrid() {
    let x = Number(prompt('How many rows and columns should the grid have?'));
    genGrid(x);
}