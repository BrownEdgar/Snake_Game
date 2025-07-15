import { snakeBody } from './constants';
import { getDirecrion } from './input';

let newSegments = 0

/**
 * Updates the snake's position and adds new segments if needed.
 * Moves the snake in the current direction and grows it if required.
 */
export function update() {
  addNewCube()
  const direction = getDirecrion()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }
  snakeBody[0].x += direction.x;
  snakeBody[0].y += direction.y;
}

/**
 * Renders the snake on the game board.
 * Clears the board and draws each segment of the snake.
 * @param {HTMLElement} gameBoard - The DOM element representing the game board.
 */
export function drow(gameBoard) {
  snakeBody.forEach(element => {
    const styles = `
       grid-row-start: ${element.y};
      grid-column-start: ${element.x};
    `
    gameBoard.insertAdjacentHTML(
      'beforeend',
      `<div class="snake" style='${styles}'></div>`
    )
  });
}

/**
 * Increases the number of segments to be added to the snake.
 * @param {number} amount - The number of segments to add.
 */
export function expandSnake(amount) {
  newSegments += amount
}

/**
 * Checks if two positions are equal.
 * @param {{x: number, y: number}} a - First position.
 * @param {{x: number, y: number}} b - Second position.
 * @returns {boolean} True if positions are equal, false otherwise.
 */
function equalPosition(a, b) {
  return a.x === b.x && a.y === b.y
}


/**
 * Checks if a given position is occupied by the snake.
 * @param {{x: number, y: number}} position - The position to check.
 * @returns {boolean} True if the position is on the snake, false otherwise.
 */
export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((elem, index) => {
    if (ignoreHead && index === 0) {
      return false;
    }
    return equalPosition(elem, position)
  })
}

/**
 * Checks if the snake's head is intersecting with its body.
 * Used to detect self-collision.
 * @returns {boolean} True if the snake intersects itself, false otherwise.
 */
export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}


/**
 * Adds new segments to the snake's body.
 * Called when the snake eats food and needs to grow.
 */
export function addNewCube() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }
  newSegments = 0;
}

/**
 * Checks if a position is outside the boundaries of the grid.
 * @param {{x: number, y: number}} position - The position to check.
 * @returns {boolean} True if outside the grid, false otherwise.
 */
export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > 20 ||
    position.y < 1 || position.y > 20
  )
}

/**
 * Gets the current position of the snake's head.
 * @returns {{x: number, y: number}} The position of the snake's head.
 */
export function getSnakeHead() {
  return snakeBody[0];
}

