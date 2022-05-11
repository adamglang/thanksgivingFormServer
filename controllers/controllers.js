const fetch = require('node-fetch')
const { Client } = require('pg');
const moment = require('moment-timezone');

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
            const {
                contactPerson,
                contactPersonPhone,
                dietaryRestrictions,
                familyName,
                notes,
                other,
                phoneNumber,
                pickupPerson,
                numberOfFamilyMembers,
            } = req.body;

            const dateCreated = moment(new Date()).tz('America/Los_Angeles').format('MMMM Do YYYY');

            await
                client.query(
                    `INSERT INTO dinner_requests
                    (contact_person, contact_person_phone, dietary_restrictions, family_name, notes, other, phone_number, pickup_person, number_of_family_members, date_created)
                    VALUES ('${contactPerson}', '${contactPersonPhone}', '${dietaryRestrictions}', '${familyName}', '${notes}', '${other}', '${phoneNumber}', '${pickupPerson}', '${numberOfFamilyMembers}', '${dateCreated}')
                ;`
            );

            res.json(`${JSON.stringify(req.body)}`);
        } catch(e) {
            console.error(e.stack);
        }
    }
}


module.exports = new Controller;
