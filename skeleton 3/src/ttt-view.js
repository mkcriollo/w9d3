class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
       let $square = $(event.currentTarget)
       this.makeMove($square)
    });
  };

  makeMove($square) {
 let pos = $square.data("pos")
  this.game.playMove(pos);
  $square.addClass(this.game.currentPlayer);
  
};

  setupBoard() {
    let $ul = $("<ul>");

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let $li = $("<li>")
      
        $li.data("pos",[row,col])
      

        $ul.append($li)
      }
      
    }
    this.$el.append($ul)
  }
}

module.exports = View;
