var canvas, ctx, gameControl, gameActive;
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