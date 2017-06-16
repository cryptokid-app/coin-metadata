 
const express     = require('express');
const merge       = require('./src/merge').default;

const app = express();
const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const host = '0.0.0.0';
const port = 9011;

// API
app.get('/', (req, response) => {
    response.send(merge());
});

console.log('Listening on '+ host + ':'+ port+'...')
app.listen(port, host);
