const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function(req, res){
    console.log(`Server is running on ${port}`);
});