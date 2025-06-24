const express = require('express');
const ditto = require('./pokemon/ditto.json');

const PORT = process.env.PORT ?? 1234;

const app = express();
app.disable('x-powered-by'); // Desactiva el header x-powered-by    

app.use(express.json()); // Middleware para parsear JSON en el cuerpo de las peticiones

// app.use((req, res, next) => {
//     if (req.method !== 'POST') return next()
//     if (req.headers['content-type'] !== 'application/json')return next()

//     // Aquí solo llegan request que son POST y tienen content-type application/json
//     let body = '';

//     req.on('data', chunk => {
//         body += chunk.toString()
//     })

//     req.on('end', () => {
//         const data = JSON.parse(body)
//         data.timestamp = Date.now()
//         // mutar la request y meter la información en el req.body
//         req.body = data;
//         next()
//     })
// });


app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto);
})

app.post('/pokemon', express.json(), (req, res) => {
    // req.body deberiamos guardan en base de datos
    res.status(201).json(req.body);
})

// la ultima a la que va a llegar
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1');
    });

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})