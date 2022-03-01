const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send('Hello');
});

app.listen(port, function(req, res){
    console.log(`Server is running on ${port}`);
});