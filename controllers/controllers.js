const fetch = require('node-fetch')
const Client = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432,
});
await client.connect()

class Controller {
    async listDinners(req, res) {
        try {
            const dinners = await client.query('SELECT * FROM dinner_requests;');
            res.json(dinners);
        } catch(e) {
            console.error(e.stack);
        }
    }

    async createDinner(req, res) {
        try {


        } catch(e) {

        }
    }
}


module.exports = new Controller;
