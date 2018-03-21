const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const mongoURL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';
const PORT = process.env.PORT || 3001;


//mongoose.connect(mongoURL);

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/info', function (req, res) { 
   res.send('Hello World!')
});

app.listen(PORT, function () {
   console.log(`Server listening on port ${PORT}!`)
});
