// Making start button hover sound 

const button = document.getElementById("soundBtn") as HTMLButtonElement;
const sound = document.getElementById("hoverSound") as HTMLAudioElement;

if (button && sound) {
  button.addEventListener("mouseenter", () => {
    sound.currentTime = 0; // Rewind to the beginning
    sound.play();
  });
}

// Main game logic

const gameContainer = document.querySelector('.game-container') as HTMLElement;
const mountain = document.querySelector('.mountain') as HTMLElement;
const bird = document.querySelector('.flappy-bird') as HTMLElement;

let mountainX = 0;
let birdY = window.innerHeight / 2;
let velocity = 0;
const gravity = 0.5;
const jumpForce = -10;
let gameOver = false;

// Background movement
function moveBackground() {
    mountainX -= 2;
    if (Math.abs(mountainX) >= window.innerWidth) {
        mountainX = 0;
    }
    mountain.style.transform = `translateX(${mountainX}px)`;
    if (!gameOver) requestAnimationFrame(moveBackground);
}
moveBackground();

// Game loop - gravity and ground collision
function gameLoop() {
    if (gameOver) return;

    velocity += gravity;
    birdY += velocity;

    bird.style.top = `${birdY}px`;

    if (birdY + bird.clientHeight >= window.innerHeight) {
        endGame();
    }

    requestAnimationFrame(gameLoop);
}
gameLoop();

// Click to jump
document.addEventListener('click', () => {
    if (gameOver) return;
    velocity = jumpForce;
});

// Piller dublicate
function createPillars() {
    const gapHeight = 30; // vh
    const minTopHeight = 10;
    const maxTopHeight = 40;

    const topHeight = Math.floor(Math.random() * (maxTopHeight - minTopHeight + 1)) + minTopHeight;
    const bottomHeight = 100 - gapHeight - topHeight;

    const piller1 = document.createElement('div');
    piller1.className = 'piller1';
    piller1.style.height = `${topHeight}vh`;
    piller1.style.left = '100vw';
    piller1.style.top = '0';
    piller1.style.position = 'absolute';

    const pillerTop1 = document.createElement('div');
    pillerTop1.className = 'piller-top1';
    piller1.appendChild(pillerTop1);

    const piller2 = document.createElement('div');
    piller2.className = 'piller2';
    piller2.style.height = `${bottomHeight}vh`;
    piller2.style.left = '100vw';
    piller2.style.bottom = '0';
    piller2.style.position = 'absolute';

    const pillerTop2 = document.createElement('div');
    pillerTop2.className = 'piller-top2';
    piller2.appendChild(pillerTop2);

    gameContainer.appendChild(piller1);
    gameContainer.appendChild(piller2);

    movePillars(piller1, piller2);
}

// Pillar animation + collision if bird touch in piller then game over
function movePillars(p1: HTMLElement, p2: HTMLElement) {
    let position = window.innerWidth;

    function animate() {
        if (gameOver) return;

        position -= 2;
        p1.style.left = `${position}px`;
        p2.style.left = `${position}px`;

        const birdRect = bird.getBoundingClientRect();
        const p1Rect = p1.getBoundingClientRect();
        const p2Rect = p2.getBoundingClientRect();

        if (checkCollision(birdRect, p1Rect) || checkCollision(birdRect, p2Rect)) {
            endGame();
        }

        if (position + p1.offsetWidth > 0) {
            requestAnimationFrame(animate);
        } else {
            p1.remove();
            p2.remove();
        }
    }

    animate();
}

// Collision check
function checkCollision(birdRect: DOMRect, pillarRect: DOMRect): boolean {
    return !(
        birdRect.top > pillarRect.bottom ||
        birdRect.bottom < pillarRect.top ||
        birdRect.right < pillarRect.left ||
        birdRect.left > pillarRect.right
    );
}

// Game over function if it touch ground or piller
function endGame() {
    gameOver = true;
    alert("Game Over! Click OK to restart.");
    window.location.reload();
}

// Create pillars in every 2s
setInterval(() => {
    if (!gameOver) createPillars();
}, 2000);
