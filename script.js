function genGrid(v) {
    let container = document.getElementById('container');
    for (let i = 0; i < v; i++) {
        let row = document.createElement('div');
        console.log('Made one row!');
        for (let x = 1; x <= v ; x++) {
            let colbox = document.createElement('div');
            colbox.id = 'box';
            colbox.innerText = (i * v) + x;
            row.appendChild(colbox);
        };
        container.appendChild(row);
    };
};