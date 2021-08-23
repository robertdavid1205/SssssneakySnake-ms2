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