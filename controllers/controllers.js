const fetch = require('node-fetch')
const { Client } = require('pg');

class Controller {
    async listDinners(req, res) {
        try {
            const client = new Client({
                user: 'postgres',
                host: 'localhost',
                database: 'postgres',
                password: 'secret123',
                port: 5432,
            });
            await client.connect();
            const dinners = await client.query('SELECT * FROM dinner_requests;');
            const rows = dinners.rows.map((row) => ({
                contactPerson: row.contact_person,
                contactPersonPhone: row.contact_person_phone,
                dietaryRestrictions: row.dietary_restrictions,
                familyName: row.family_name,
                notes,
                other,
                phoneNumber: row.phone_number,
            }))
            res.json(rows);
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
