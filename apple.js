class apple {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.grid = 25;
    this.update();
  }
  update(cells = []) {
    do{
      this.x = (Math.floor(Math.random() * (19 - 0)) + 0) * this.grid;
      this.y = (Math.floor(Math.random() * (19 - 0)) + 0) * this.grid;
    }while(cells.includes({x:this.x,y:this.y}));
    console.log(cells)
  }
  draw() {
    this.game.context.fillStyle = "red";
    this.game.context.fillRect(this.x, this.y, this.grid, this.grid);
  }
}
