class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $ul = $("<ul>");

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let $li = $("<li>")
        let pos = [row,col]
        $li.after(pos)

        $ul.append($li)
      }
      
    }
    this.$el.append($ul)
  }
}

module.exports = View;
