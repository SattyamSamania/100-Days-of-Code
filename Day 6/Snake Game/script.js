var blockSize =25;
var rows = 20;
var cols =20;

var board;
var context;

//snake head
var snakeX = blockSize *5;
var snakeY = blockSize*5;

//food
var foodX = blockSize*10;
var foodY = blockSize*10;

window.onload = function() {
    board= document.getElementById("board");
    board.height = rows*blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); // used for drawing on the board

    placeFood();
    update();
}

function update(){
    context.fillStyle = "black";
    context.fillRect(0,0, board.width, board.height);

    context.fillStyle = "green";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    context.fillStyle = "red";
    context.fillRect(foodX,foodY,blockSize,blockSize)
}


function placeFood(){
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}