// making loading screen 
const startButton = document.querySelector(".start-btn") as HTMLButtonElement;
const loadingScreen = document.querySelector(".loading-screen-container") as HTMLElement;
const gameContainer = document.querySelector('.game-container') as HTMLElement;

let gameStarted = false;

startButton.addEventListener("click", () => {
    loadingScreen.style.display = "none";
    gameContainer.style.display = "block";

    gameStarted = true;
    startGame();
});


// Button hover sound
const button = document.querySelector("#sound-btn") as HTMLButtonElement;
const btnHoverSound = document.querySelector("#btn-hover-sound") as HTMLAudioElement;

if (button && btnHoverSound) {
    button.addEventListener("mouseenter", () => {
        btnHoverSound.currentTime = 0;
        btnHoverSound.play();
    });
}

// Audio elements
const birdSound = document.querySelector("#bird-sound") as HTMLAudioElement;
const fallingSound = document.querySelector("#falling-sound") as HTMLAudioElement;
const scoreSound = document.querySelector("#score-sound") as HTMLAudioElement;

// Score display
const scoreDisplay = document.querySelector(".bird-score") as HTMLElement;
let score = 0;

// Main game elements
const mountain = document.querySelector('.mountain') as HTMLElement;
const bird = document.querySelector('.flappy-bird') as HTMLElement;

let mountainX = 0;
let birdY = window.innerHeight / 2;
let velocity = 0;
const gravity = 0.5;
const jumpForce = -10;
let gameOver = false;
let pillarSpeed = 4;

// Game starter
function startGame() {
    // Start background and game loop
    moveBackground();
    gameLoop();

    // Generate pillars every second
    setInterval(() => {
        if (!gameOver) createPillars();
    }, 1000);
}

// Background movement
function moveBackground() {
    mountainX -= 4;
    if (Math.abs(mountainX) >= window.innerWidth) {
        mountainX = 0;
    }
    mountain.style.transform = `translateX(${mountainX}px)`;
    if (!gameOver) requestAnimationFrame(moveBackground);
}

// Game loop
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

// Click to jump
document.addEventListener('click', () => {
    if (!gameStarted || gameOver) return;
    velocity = jumpForce;

    // play bird jump sound
    birdSound.currentTime = 0;
    birdSound.play();
});

// Piller dublicate
function createPillars() {
    const gapHeight = 35;
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

// Move pillars + score + making if bird touch piller or ground game will end
function movePillars(p1: HTMLElement, p2: HTMLElement) {
    let position = window.innerWidth;
    let scored = false;

    function animate() {
        if (gameOver) return;

        position -= pillarSpeed;
        p1.style.left = `${position}px`;
        p2.style.left = `${position}px`;

        const birdRect = bird.getBoundingClientRect();
        const p1Rect = p1.getBoundingClientRect();
        const p2Rect = p2.getBoundingClientRect();

        if (checkCollision(birdRect, p1Rect) || checkCollision(birdRect, p2Rect)) {
            endGame();
        }

        if (!scored && position + p1.offsetWidth < birdRect.left) {
            scored = true;
            score++;
            scoreDisplay.textContent = score.toString();

            scoreSound.currentTime = 0;
            scoreSound.play();

            if (score % 5 === 0) {
                pillarSpeed += 0.15;
            }
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

// making game over if bird touch the piller
function checkCollision(birdRect: DOMRect, pillarRect: DOMRect): boolean {
    return !(
        birdRect.top > pillarRect.bottom ||
        birdRect.bottom < pillarRect.top ||
        birdRect.right < pillarRect.left ||
        birdRect.left > pillarRect.right
    );
}

// Game over
function endGame() {
    if (gameOver) return;
    gameOver = true;

    fallingSound.currentTime = 0;
    fallingSound.play();

    setTimeout(() => {
        alert("Game Over! Click OK to restart.");
        window.location.reload();
    }, 100);
}
