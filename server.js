const express = require('express')
const fs = require('fs');

const log = function(entry) {
fs.appendFileSync('mylog.log', new Date().toISOString() + ' - ' + entry + '\n');
};

const app = express();

app.get('/', (req, res) => {
    log('Homepage visited.')
    res.sendFile(__dirname + '/index.html');
})
app.get('/hello', (req, res) => {
    log('Homepage visited.')
    res.send('Hello... yeah that\'s all this route does. Sorry about that.');
})
app.get('/goat', (req, res) => {
    log('Homepage visited.')
    res.send('Tom Brady, obviously.');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('app listening on port ' + port)
})