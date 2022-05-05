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
                notes: row.notes,
                otherDietaryRestrictions: row.other,
                phoneNumber: row.phone_number,
                pickupPerson: row.pickup_person,
                numberOfFamilyMembers: row.number_of_family_members,
            }))
            res.json(rows);
            await client.end()
        } catch(e) {
            console.error(e.stack);
        }
    }

    async createDinner(req, res) {
        try {
            const client = new Client({
                user: 'postgres',
                host: 'localhost',
                database: 'postgres',
                password: 'secret123',
                port: 5432,
            });
            await client.connect();
            console.log(req.body)
            res.json(`temp result ${JSON.stringify(req.body)} was sent`);

        } catch(e) {

        }
    }
}


module.exports = new Controller;
