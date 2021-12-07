class game {
  constructor() {
    this.canvas = null;
    this.context = null;
    this.init();
    this.loop();
  }
  init() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = 600;
    this.canvas.height = 600;
    document.body.appendChild(this.canvas);
    this.snake = new snake(this);
    this.apple = new apple(this);
  }
  loop() {
    this.update();
    this.draw();
    setTimeout(() =>this.loop(),100);
  }
  update() {
  
    this.snake.update();
    if (this.snake.x == this.apple.x && this.snake.y == this.apple.y){
    this.apple.update();
    this.snake.maxCells++;
    
    }
  }
  draw() {
    if (this.snake.checkEnd()){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.snake.draw();
    this.apple.draw();
    this.context.fillStyle = "orange";
    this.context.font = "20px Ink Free";
    this.context.fillText("Your Score : "+(this.snake.maxCells - 6),5,25);
    }else {
      this.context.fillStyle = "red";
      this.context.font = "40px Ink Free";
      this.context.fillText("Your Score : "+(this.snake.maxCells - 6), 180,300);
      this.context.font = "40px Ink Free";
      this.context.fillStyle = "green";
      this.context.fillText('Press Space to start!', 130,400);
      document.getElementByIdaddEventListener('keydown', (e) => {
        if(e.key == " "){
            location.reload();
        }
    })
    }
  }
}

var g = new game();
