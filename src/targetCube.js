import { expandSnake, onSnake } from './helpers';

// values must by 1-20
let cube = getRandomCubePosition()
const SNAKE_LENGTH_RATE = 1;

export function updateCube(score) {
  if (onSnake(cube)) {
    score.textContent = parseInt(score.textContent) + 1
    expandSnake(SNAKE_LENGTH_RATE);
    cube = getRandomCubePosition()
  }
}


export function drowCube(gameBoard) {

  const styles = `
        grid-row-start:${cube.y};
        grid-column-start:${cube.x};
    `
  gameBoard.insertAdjacentHTML(
    'beforeend',
    `<div class="target__cube" style='${styles}'></div>`
  )
}

export function getRandomCubePosition() {
  let newPosition;
  if (newPosition == null || onSnake(newPosition)) {
    newPosition = setRandomGridPosition()
  }
  return newPosition;
}

function setRandomGridPosition() {
  return {
    x: Math.floor(Math.random() * 20) + 1,
    y: Math.floor(Math.random() * 20) + 1
  }
}