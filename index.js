const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://lynne:gonzalez@cluster0.rrsoe.mongodb.net/store?retryWrites=true&w=majority')
    .then(db => console.log('BD conectada'))
    .catch(error => console.log(error));

// habilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// habilitar cors
app.use(cors());

app.use('/', routes());

app.use(express.static('uploads'));

// server port
app.listen(process.env.PORT || 5000);