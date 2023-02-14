// This function determine if a tile can move or not

const canMove = (tile) => {
  // 1. GET CURRENT TILE POSITION
  const tileColumnIndex = tile.cellIndex;
  const tileRowIndex = tile.parentElement.rowIndex;

  // 2. GET THE EMPTY TILE POSITION
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumnIndex = emptyTile.cellIndex;
  const emptyTileRowIndex = emptyTile.parentElement.rowIndex;

  // 3. CHECK IF EMPTY NEIGHBORS
  const emptyUp = emptyTileColumnIndex === tileColumnIndex && tileRowIndex + 1 === emptyTileRowIndex;
  const emptyDown = emptyTileColumnIndex === tileColumnIndex && tileRowIndex - 1 === emptyTileRowIndex;
  const emptyRight = emptyTileRowIndex === tileRowIndex && tileColumnIndex - 1 === emptyTileColumnIndex;
  const emptyLeft = emptyTileRowIndex === tileRowIndex && tileColumnIndex + 1 === emptyTileColumnIndex;

  return emptyUp || emptyDown || emptyRight || emptyLeft;
};


// TODO

// HINT BUTTON
const button = document.querySelector('#show-hint');

button.addEventListener('click', (event) => {
  const div = document.querySelector('.hint');
  div.style.opacity = 1;
});


// GAME

// sélectionner toutes les cellules (td)
// itère sur chacune des cellules, pour écouter le 'click'
// dans le callback, appeler canMove()
// si oui, la déplacer
// si non? rien

const winningOrder = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ''];

const cells = document.querySelectorAll('td');

cells.forEach((cell) => {
  cell.addEventListener('click', (event) => {
    const willMove = canMove(event.currentTarget);
    if (willMove) {
      const emptyTile = document.querySelector('.empty');
      emptyTile.classList.remove('empty');
      emptyTile.innerText = event.currentTarget.innerText;

      event.currentTarget.classList.add('empty');
      event.currentTarget.innerText = '';
    }

    if (isWon()) {
      setTimeout(() => {
        window.alert('Gagné!!!');
      }, 1000);
    }
  });
});

const isWon = () => {
  // sélectionner toutes les tuiles
  // on itère pour comparer chacune des tuiles avec l'array

  let validTiles = 0;

  const tiles = document.querySelectorAll('td');
  
  tiles.forEach((tile, index) => {
    const value = tile.innerText;
    const isSameValue = value === winningOrder[index];
    console.log(isSameValue);
    if (isSameValue) {
      validTiles += 1;
    }
  });

  return validTiles === 16;
}

