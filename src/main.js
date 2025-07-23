import './style.css'
import { drow, getSnakeHead, outsideGrid, snakeIntersection, update } from './helpers.js';
import { drowCube, updateCube } from './targetCube.js';
import Storage from './Storage.js';

const app = document.querySelector('#app')
const startBtn = document.querySelector('#start')
const modalWrapper = document.querySelector('.modal__wrapper')
const score = document.querySelector('.current_score>span')
const best_score = document.querySelector('.best_score>span')

let lastRenderTime = 0;
let gameOver = false;
let SNAKE_SPEED = 6

best_score.textContent = Storage.getScoreFromStorage()

export function start(currentTime) {
  if (gameOver) {
    Storage.updateScoreIdNeeded(parseInt(score.textContent))
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
      modalWrapper.classList.remove('modal__wrapper-hide')
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
  updateCube(score)
  checkForEnd()
}

function checkForEnd() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

startBtn.addEventListener('click', () => {
  modalWrapper.classList.add('modal__wrapper-hide')
  window.requestAnimationFrame(start)
})








