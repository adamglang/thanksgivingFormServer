const controller = require('../controllers/controllers');

function routes(app) {
    app.route('/').get((req, res) => res.text('OK'));
    app.route('/list').get(controller.listDinners)
    app.route('createDinner').post(controller.createDinner)
}

module.exports = routes;
