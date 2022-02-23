//Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//Importamos la conexion a la db
    const { connect } = require("./api/utils/database/connect");

// Express APIs
const users = require('./api/routes/user.routes');
const Sabores = require('./api/routes/Sabores.routes');
const Especialidades = require('./api/routes/Especialidades.routes');

//Ejecutamos la funcion que conecta con la db
connect();

// Configuración de express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// Aquí indicamos las rutas a usar
app.use('/server', express.static('public'));

app.use('/users', users)

app.use('/Sabores', Sabores)

app.use('/Especialidades', Especialidades)

// Definimos el puerto desde el dotenv y si no lo hubiera el 4000
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Manejamos los errores
app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('PAGE NOT FOUND'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});