const View = require('./ttt-view');
const Game = require('../../solution_13/game');

  $(() => {
    let el = $(".ttt")
    let game = new Game();
    new View(game, el)
  });
