var grid = [[1,1,1], [1,1,1],[1,1,0]];

var solution = [['a','a','a'], ['a','a','a'], ['a','a',0]];

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
        cell.id = a*l + b;
      } else {
        let cell = document.createElement("input");
        container.appendChild(cell).className = "grid-item2";
        cell.setAttribute("maxlength", "0");
        cell.id = a*l + b;
      }
    }
  }
}

function check() {
  console.log("hi");
  var flag = 1
  for(i = 0; i < l*l;i++) {
    var square = document.getElementById(i);
    console.log(square.value);
    var x = Math.floor(i/3);
    var y = i % 3
    if(square.value != solution[x][y]) {
      flag = 0;
      square.style.backgroundColor = "red";
    } else {
      square.style.backgroundColor = "white";
    }
  }
  if(flag == 1) {
    console.log('correct');
  } else {
    console.log('incorrect');
  }
}
//makeRows(3, 3);
buildGrid();
