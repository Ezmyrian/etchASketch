function createGrid() {
  const body = document.querySelector('body');
  const grid = document.createElement('div');
  grid.classList.add('grid');
  
  for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (j = 0; j <16; j++) {
      const column = document.createElement('div');
      column.classList.add('square');
      row.appendChild(column);
    }
    grid.appendChild(row);
  }
  body.appendChild(grid);
}

createGrid()