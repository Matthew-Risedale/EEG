const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const mongoURL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';
const PORT = process.env.PORT || 3001;


//mongoose.connect(mongoURL);
//todo: let's carry out logic for mongo connector in a separate file

const app = express();

app.use(cors());

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(require('./api/routes'));


app.listen(PORT, function () {
   console.log(`Server listening on port ${PORT}!`)
});
