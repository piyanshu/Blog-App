const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    return res.render('index');
});

app.listen(port, function(req, res){
    console.log(`Server is running on ${port}`);
});