const express = require('express');
const cors = require('cors');
var morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(morgan('tiny'));
app.use(cors());



//importing all routes here
const home  = require('./routes/home');
const event  = require('./routes/event');


app.use('/api/v1/', home);
app.use('/api/v1/', event);

module.exports = app;