const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

const INFO = `
    AutoDocumentation HENRY
`;

const WORKING_ON_PORT = `Funcionando en puerto ${PORT}`;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(INFO);
  console.log(WORKING_ON_PORT);
});