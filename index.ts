// index.js
import express from 'express';

const app = express();
const port = 3000;
import mailRoutes from './routes/mail.routes';
import dotenv from 'dotenv';

// Middlewares para parsear el cuerpo de las solicitudes
app.use(express.json()); // Para parsear application/json
app.use(express.urlencoded({ extended: true })); // Para parsear application/x-www-form-urlencoded

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');  // O reemplaza '*' con tu dominio
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

console.log(process.env.API_KEY); // "12345" (¡Sin necesidad de dotenv!)

app.get('/', (req, res) => {
  res.send('¡Hola mundo con Bun + Express!');
});

app.use('/api', mailRoutes);
app.use('/resources', resources)

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});