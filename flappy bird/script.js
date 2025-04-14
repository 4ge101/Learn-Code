// Making start button hover sound 
var button = document.getElementById("soundBtn");
var sound = document.getElementById("hoverSound");
if (button && sound) {
    button.addEventListener("mouseenter", function () {
        sound.currentTime = 0; // Rewind to the beginning
        sound.play();
    });
}
// Main game logic
var gameContainer = document.querySelector('.game-container');
var mountain = document.querySelector('.mountain');
var bird = document.querySelector('.flappy-bird');
var mountainX = 0;
var birdY = window.innerHeight / 2;
var velocity = 0;
var gravity = 0.5;
var jumpForce = -10;
var gameOver = false;
// Background movement
function moveBackground() {
    mountainX -= 2;
    if (Math.abs(mountainX) >= window.innerWidth) {
        mountainX = 0;
    }
    mountain.style.transform = "translateX(".concat(mountainX, "px)");
    if (!gameOver)
        requestAnimationFrame(moveBackground);
}
moveBackground();
// Game loop - gravity and ground collision
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
gameLoop();
// Click to jump
document.addEventListener('click', function () {
    if (gameOver)
        return;
    velocity = jumpForce;
});
// Piller dublicate
function createPillars() {
    var gapHeight = 30; // vh
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
// Pillar animation + collision if bird touch in piller then game over
function movePillars(p1, p2) {
    var position = window.innerWidth;
    function animate() {
        if (gameOver)
            return;
        position -= 2;
        p1.style.left = "".concat(position, "px");
        p2.style.left = "".concat(position, "px");
        var birdRect = bird.getBoundingClientRect();
        var p1Rect = p1.getBoundingClientRect();
        var p2Rect = p2.getBoundingClientRect();
        if (checkCollision(birdRect, p1Rect) || checkCollision(birdRect, p2Rect)) {
            endGame();
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
// Collision check
function checkCollision(birdRect, pillarRect) {
    return !(birdRect.top > pillarRect.bottom ||
        birdRect.bottom < pillarRect.top ||
        birdRect.right < pillarRect.left ||
        birdRect.left > pillarRect.right);
}
// Game over function if it touch ground or piller
function endGame() {
    gameOver = true;
    alert("Game Over! Click OK to restart.");
    window.location.reload();
}
// Create pillars in every 2s
setInterval(function () {
    if (!gameOver)
        createPillars();
}, 2000);
