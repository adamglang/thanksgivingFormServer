const fetch = require('node-fetch')
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'secret123',
    port: 5432,
});

class Controller {
    async listDinners(req, res) {
        try {
            await client.connect();
            const dinners = await client.query('SELECT * FROM dinner_requests;');
            res.json(dinners.rows);
            await client.end()
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
