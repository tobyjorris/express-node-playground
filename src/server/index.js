const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Listening on port 8081!')
})

app.post('/object', function (req, res) {
    console.log(req)
})

app.post('/string', function (req, res) {
    console.log(req)
})




