import { drow, getSnakeHead, outsideGrid, snakeIntersection, update } from './helpers.js';
import { drowCube, updateCube } from './targetCube.js';

import './style.css'

const app = document.querySelector('#app')


let lastRenderTime = 0;
let gameOver = false;
const SNAKE_SPEED = 5



export function start(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
    }
    return
  }
  window.requestAnimationFrame(start)
  const result = (currentTime - lastRenderTime) / 1000;
  if (result < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  updateAll()
  drowAll()
}

function drowAll() {
  app.innerHTML = ''
  drow(app)
  drowCube(app)
}

function updateAll() {
  update()
  updateCube()
  checkForEnd()
}

function checkForEnd() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


window.requestAnimationFrame(start)







