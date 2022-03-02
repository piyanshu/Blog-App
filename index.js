const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

const db = require('./config/mongoose');
const blog = require('./models/blog');

app.get('/', function(req, res){
    return res.render('index');
});
app.post('/', function(req, res){
    blog.create(req.body, function(err, blog){
        if(err){
            console.log('error in creating blog');
        }else{
            return res.redirect('back');
        }
    });
});

app.listen(port, function(req, res){
    console.log(`Server is running on ${port}`);
});