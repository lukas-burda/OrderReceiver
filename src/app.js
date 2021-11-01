const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('../config/routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(routes);

const port = 3000;
const host = '0.0.0.0';

app.listen(port, () => {
    console.log("Express started at: "+host+":"+port)
});
