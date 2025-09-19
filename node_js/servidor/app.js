const express = require('express');
require('dotenv').config();
import cors from 'cors';

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    res.send('hola mamá')
});

app.post('/usuario', (req, res)=> {
    const usuario = req.body;
    res.json({mensaje:"Usuario recibido ", usuario})
});

app.listen(port, () =>console.log('API funcionando en http://localhost:3000'));

