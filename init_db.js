require('dotenv').config();
const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL;

const client = new Client({
    connectionString,
});

async function createTable() {
    try {
        await client.connect();
        await client.query(`
            CREATE TABLE IF NOT EXISTS contactos (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(100) NOT NULL,
                correo VARCHAR(100) NOT NULL,
                asunto VARCHAR(200) NOT NULL,
                mensaje TEXT NOT NULL,
                fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('Tabla "contactos" creada o ya existe.');
    } catch (err) {
        console.error('Error creando la tabla:', err);
    } finally {
        await client.end();
    }
}

createTable();