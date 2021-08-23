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

 // fruit
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

    //snake bites the fruit
    if (snakeX == appleX && snakeY == appleY) {
      tailSize++;

      appleX = Math.floor(Math.random() * areaSize);
      appleY = Math.floor(Math.random() * areaSize);
    }

    //  Select the colour to fill the canvas
    ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
    //  Select the colour for the border of the canvas
    ctx.strokestyle = CANVAS_BORDER_COLOUR;

    // Draw a "full" square to cover the entire canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw a "border" around the entire canvas
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // colour snake
    ctx.fillStyle = SNAKE_COLOUR;
    ctx.strokestyle = SNAKE_BORDER_COLOUR;
    for (var i = 0; i < snakeTrail.length; i++) {
      ctx.fillRect(
        snakeTrail[i].x * tileSize,
        snakeTrail[i].y * tileSize,
        tileSize,
        tileSize
      );
      
      ctx.strokeRect(snakeTrail[i].x * tileSize , snakeTrail[i].y * tileSize, tileSize, tileSize);

       //when the snake bites it's tail
       if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
        if(tailSize > 3) {
            endGame(tailSize);
        }
        tailSize = defaultSnakeSize;  
      }
    }

    // colour fruit
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileSize, appleY * tileSize, tileSize, tileSize);

    //set snake trail
    snakeTrail.push({ x: snakeX, y: snakeY });
    while (snakeTrail.length > tailSize) {
      snakeTrail.shift();
    }
  }

   // controls
   function keyDownEvent(e) {
    switch (e.keyCode) {
      case 37:
        nextX = -1;
        nextY = 0;
        break;
      case 38:
        nextX = 0;
        nextY = -1;
        break;
      case 39:
        nextX = 1;
        nextY = 0;
        break;
      case 40:
        nextX = 0;
        nextY = 1;
        break;
      case 32:
        if(gameOn == true) {
            pauseGame();
        }
        else {
            gameControl = startGame(x);
        }
        break;
    }
  }