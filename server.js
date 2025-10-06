require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const connectionString = process.env.DATABASE_URL;

app.post('/send', async (req, res) => {
    const { name, email, subject, message } = req.body;
    const client = new Client({ connectionString });

    try {
        await client.connect();
        await client.query(
            'INSERT INTO contactos (nombre, correo, asunto, mensaje) VALUES ($1, $2, $3, $4)',
            [name, email, subject, message]
        );
        res.status(200).json({ message: 'Mensaje guardado correctamente' });
    } catch (error) {
        console.error('Error al guardar mensaje:', error);
        res.status(500).json({ message: 'Error al guardar el mensaje', error });
    } finally {
        await client.end();
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});

// Export para Vercel
module.exports = app;