var boardController = require('./boardController.js');

module.exports = function (app) {

  app.route('/')
    .post(boardController.createBoard);

};
