const fetch = require('node-fetch')
const Client = require('pg');

class Controller {
    async listDinners(req, res) {
        try {

        } catch(e) {
            console.error(e.stack);
        }
    }

    async createDinner(req, res) {
        try {
            const client = new Client()
            await client.connect()

        } catch(e) {

        }
    }
}


module.exports = new Controller;
