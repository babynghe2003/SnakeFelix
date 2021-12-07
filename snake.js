class snake {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.grid = 25;
    this.dx = 0;
    this.dy = this.grid;
    this.cells = [];
    this.maxCells = 6;
  }
  update() {
    // if (this.checkEnd()){
    this.x += this.dx;
    this.y += this.dy;
    // }
    // Di xuyen tuong
    if (this.x >= this.game.canvas.width){
        this.x = 0;
    }
    if (this.x <= -this.grid){
        this.x = this.game.canvas.width;
    }
    if (this.y >= this.game.canvas.height){
        this.y = 0;
    }
    if (this.y <= -this.grid){
        this.y = this.game.canvas.height;
    }
    this.cells.unshift({x: this.x, y: this.y});
    // cat duoi
    if (this.cells.length > this.maxCells) {
        this.cells.pop();
    }
    this.catchHandle();
  }
  draw() {
      for (var i = 0; i < this.cells.length; i++){
        if (i == 0) this.game.context.fillStyle = "orange";
        else
        this.game.context.fillStyle = "yellow";
        this.game.context.fillRect(this.cells[i].x, this.cells[i].y, this.grid, this.grid);
      }
  }

  catchHandle() {
    document.addEventListener("keydown", (e) => {
      if (e.which == 37 && this.dx != this.grid) { // Left
        this.dx = -this.grid;
        this.dy = 0;
      } else if (e.which == 38 && this.dy != this.grid) { // UP
        this.dx = 0;
        this.dy = -this.grid;
      } else if (e.which == 39 && this.dx != -this.grid) { // RIGHT
        this.dx = this.grid;
        this.dy = 0;
      } else if (e.which == 40 && this.dy != -this.grid) { // DOWN
        this.dy = this.grid;
        this.dx = 0;
      }
    });
  }
  checkEnd() {
      for (let i = 1; i < this.cells.length; i++){
          if (this.x == this.cells[i].x && this.y == this.cells[i].y) return false;
          
      }return true; 
  }
}
