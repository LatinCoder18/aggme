const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const validateJSON = require('../middlewares/ValidateJson');
const ErrorMiddleware = require('../middlewares/ErrorValidator').getErrorInstance();
require('dotenv').config()
const app = express();
var morgan = require('morgan')

const port = process.env.SERVER_PORT;
const url = process.env.SERVER_URL;

// Middlewares

// Error middlewares
app.use(ErrorMiddleware.errorLogger);
app.use(ErrorMiddleware.errorResponder);
// Rutas de las Vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
// Middleware para servir archivos estáticos (CSS, imágenes, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(validateJSON);

// Rutas de mi app
app.use(`/auth`, require(`../web/routes/AuthRoute`));
app.use(`/`, require(`../web/routes/HomeRoute`));

if (!(process.env.NODE_ENV === 'test')) {
    app.listen(port, () => {
        console.log(`App listening at http://${url}:${port}`);
    });
}

module.exports = app;