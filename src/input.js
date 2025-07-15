let initialDirection = { x: 0, y: 0 }
let lastDirection = { x: 0, y: 0 }

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastDirection.y !== 0) break
      initialDirection = { x: 0, y: -1 }
      break;
    case 'ArrowDown':
      if (lastDirection.y !== 0) break
      initialDirection = { x: 0, y: 1 }
      break;
    case 'ArrowLeft':
      if (lastDirection.x !== 0) break
      initialDirection = { x: -1, y: 0 }
      break;
    case 'ArrowRight':
      if (lastDirection.x !== 0) break
      initialDirection = { x: 1, y: 0 }
      break;
  }
})


export function getDirecrion() {
  lastDirection = initialDirection
  return initialDirection;
}