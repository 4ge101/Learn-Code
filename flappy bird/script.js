// making loading screen 
var startButton = document.querySelector(".start-btn");
var loadingScreen = document.querySelector(".loading-screen-container");
var gameContainer = document.querySelector('.game-container');
var gameStarted = false;
startButton.addEventListener("click", function () {
    loadingScreen.style.display = "none";
    gameContainer.style.display = "block";
    gameStarted = true;
    startGame();
});
// Button hover sound
var button = document.querySelector("#sound-btn");
var btnHoverSound = document.querySelector("#btn-hover-sound");
if (button && btnHoverSound) {
    button.addEventListener("mouseenter", function () {
        btnHoverSound.currentTime = 0;
        btnHoverSound.play();
    });
}
// Audio elements
var birdSound = document.querySelector("#bird-sound");
var fallingSound = document.querySelector("#falling-sound");
var scoreSound = document.querySelector("#score-sound");
// Score display
var scoreDisplay = document.querySelector(".bird-score");
var score = 0;
// Main game elements
var mountain = document.querySelector('.mountain');
var bird = document.querySelector('.flappy-bird');
var mountainX = 0;
var birdY = window.innerHeight / 2;
var velocity = 0;
var gravity = 0.5;
var jumpForce = -10;
var gameOver = false;
var pillarSpeed = 4;
var pillarInterval;
// Game starter
function startGame() {
    // Start background and game loop
    if (pillarInterval)
        clearInterval(pillarInterval);
    moveBackground();
    gameLoop();
    // creating pillers every second
    pillarInterval = setInterval(function () {
        if (!gameOver)
            createPillars();
    }, 1000);
}
// Background movement
function moveBackground() {
    mountainX -= 4;
    if (Math.abs(mountainX) >= window.innerWidth) {
        mountainX = 0;
    }
    mountain.style.transform = "translateX(".concat(mountainX, "px)");
    if (!gameOver)
        requestAnimationFrame(moveBackground);
}
// Game loop
function gameLoop() {
    if (gameOver)
        return;
    velocity += gravity;
    birdY += velocity;
    bird.style.top = "".concat(birdY, "px");
    if (birdY + bird.clientHeight >= window.innerHeight) {
        endGame();
    }
    requestAnimationFrame(gameLoop);
}
// Click to jump
document.addEventListener('click', function () {
    if (!gameStarted || gameOver)
        return;
    velocity = jumpForce;
    // play bird jump sound
    birdSound.currentTime = 0;
    birdSound.play();
});
// Piller dublicate
function createPillars() {
    var gapHeight = 35;
    var minTopHeight = 10;
    var maxTopHeight = 40;
    var topHeight = Math.floor(Math.random() * (maxTopHeight - minTopHeight + 1)) + minTopHeight;
    var bottomHeight = 100 - gapHeight - topHeight;
    var piller1 = document.createElement('div');
    piller1.className = 'piller1';
    piller1.style.height = "".concat(topHeight, "vh");
    piller1.style.left = '100vw';
    piller1.style.top = '0';
    piller1.style.position = 'absolute';
    var pillerTop1 = document.createElement('div');
    pillerTop1.className = 'piller-top1';
    piller1.appendChild(pillerTop1);
    var piller2 = document.createElement('div');
    piller2.className = 'piller2';
    piller2.style.height = "".concat(bottomHeight, "vh");
    piller2.style.left = '100vw';
    piller2.style.bottom = '0';
    piller2.style.position = 'absolute';
    var pillerTop2 = document.createElement('div');
    pillerTop2.className = 'piller-top2';
    piller2.appendChild(pillerTop2);
    gameContainer.appendChild(piller1);
    gameContainer.appendChild(piller2);
    movePillars(piller1, piller2);
}
// move pillars + score + making if bird touch piller or ground game will end
function movePillars(p1, p2) {
    var position = window.innerWidth;
    var scored = false;
    function animate() {
        if (gameOver)
            return;
        position -= pillarSpeed;
        p1.style.left = "".concat(position, "px");
        p2.style.left = "".concat(position, "px");
        var birdRect = bird.getBoundingClientRect();
        var p1Rect = p1.getBoundingClientRect();
        var p2Rect = p2.getBoundingClientRect();
        if (checkCollision(birdRect, p1Rect) || checkCollision(birdRect, p2Rect)) {
            endGame();
        }
        // adding score and every 5 point piller speed increase
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
        }
        else {
            p1.remove();
            p2.remove();
        }
    }
    animate();
}
// making game over if bird touch the piller
function checkCollision(birdRect, pillarRect) {
    return !(birdRect.top > pillarRect.bottom ||
        birdRect.bottom < pillarRect.top ||
        birdRect.right < pillarRect.left ||
        birdRect.left > pillarRect.right);
}
// Game over
function endGame() {
    if (gameOver)
        return;
    gameOver = true;
    fallingSound.currentTime = 0;
    fallingSound.play();
    // show lose container after game end
    gameLoseContainer.style.display = "flex";
}
// making lose container
var gameLoseContainer = document.querySelector(".game-lose-container");
var retryBtn = document.querySelector("#retry-btn");
var menuBtn = document.querySelector("#menu-btn");
// making retry for game
retryBtn.addEventListener("click", function () {
    // reset game state
    score = 0;
    scoreDisplay.textContent = "0";
    pillarSpeed = 4;
    velocity = 0;
    birdY = window.innerHeight / 2;
    bird.style.top = "".concat(birdY, "px");
    gameOver = false;
    var pillars = gameContainer.querySelectorAll('.piller1, .piller2');
    pillars.forEach(function (pillar) { return pillar.remove(); });
    // Hide lose screen
    gameLoseContainer.style.display = "none";
    startGame();
});
// going back to loading screen
menuBtn.addEventListener("click", function () {
    // reset game state
    gameLoseContainer.style.display = "none";
    gameContainer.style.display = "none";
    loadingScreen.style.display = "block";
    // reset variables to satrt game from start
    gameStarted = false;
    gameOver = false;
    score = 0;
    scoreDisplay.textContent = "0";
    pillarSpeed = 4;
    velocity = 0;
    birdY = window.innerHeight / 2;
    bird.style.top = "".concat(birdY, "px");
    // Clear interval if it exists to prevent dublicating pillers
    if (pillarInterval)
        clearInterval(pillarInterval);
    var pillars = gameContainer.querySelectorAll('.piller1, .piller2');
    pillars.forEach(function (pillar) { return pillar.remove(); });
});
