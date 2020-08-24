var grid = [[0,0,1], [1,0,0],[1,1,1]]

var solution = []

var l = 3
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("input");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    cell.setAttribute("maxlength", "1");
  };
};

function buildGrid() {
  container.style.setProperty('--grid-rows', l);
  container.style.setProperty('--grid-cols', l);
  for(a = 0; a < l; a++) {
    for(b = 0; b < l;b++) {
      if(grid[a][b] == 1) {
        let cell = document.createElement("input");
        container.appendChild(cell).className = "grid-item";
        cell.setAttribute("maxlength", "1");
      } else {
        let cell = document.createElement("input");
        container.appendChild(cell).className = "grid-item2";
        cell.setAttribute("maxlength", "0");
      }
    }
  }
}

//makeRows(3, 3);
buildGrid();
