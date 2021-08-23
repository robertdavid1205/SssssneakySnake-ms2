var canvas, ctx, gameControl, gameOn;
// render X times per second
var x = 10;

const CANVAS_BORDER_COLOUR = 'red';
const CANVAS_BACKGROUND_COLOUR = "black";
const SNAKE_COLOUR = 'lightgreen';
const SNAKE_BORDER_COLOUR = 'darkgreen';

window.onload = function() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", keyDownEvent);

    gameControl = startGame(x);
  };

   /* function for the start of the game */
   function startGame(x) {
    // setting gameOn to true
    gameOn = true;
    document.getElementById("game-status").innerHTML = "<small>Game Started</small>";
    document.getElementById("game-score").innerHTML = "";
    return setInterval(draw, 1000 / x);
}

function pauseGame() {
    // setting gameOn flag to false
    clearInterval(gameControl);
    gameOn = false;
    document.getElementById("game-status").innerHTML = "<small>Game Paused</small>";
}

function endGame(x) {
    // setting gameOn flag to false
    clearInterval(gameControl);
    gameOn = false;
    document.getElementById("game-status").innerHTML = "<small>Game Over</small>";
    document.getElementById("game-score").innerHTML = "<h1>Score: " + x + "</h1>";
}

 // game world
 var areaSize = (tileSize = 20); // 20 x 20 = 400
 var nextX = (nextY = 0);

 // snake
 var defaultSnakeSize = 3;
 var tailSize = defaultSnakeSize;
 var snakeTrail = [];
 var snakeX = (snakeY = 10);

 // apple
 var appleX = (appleY = 15);

 // draw
 function draw() {
    // move snake in next pos
    snakeX += nextX;
    snakeY += nextY;

    // snake over game world?
    if (snakeX < 0) {
      snakeX = areaSize - 1;
    }
    if (snakeX > areaSize - 1) {
      snakeX = 0;
    }

    if (snakeY < 0) {
      snakeY = areaSize - 1;
    }
    if (snakeY > areaSize - 1) {
      snakeY = 0;
    }

    //snake bite apple?
    if (snakeX == appleX && snakeY == appleY) {
      tailSize++;

      appleX = Math.floor(Math.random() * areaSize);
      appleY = Math.floor(Math.random() * areaSize);
    }