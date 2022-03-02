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
    blog.find({}, function(err, blogs){
        if(err){
            console.log('Error in finding post');
        }else{
            // console.log(blogs);
            return res.render('index', {
                blogs: blogs
            });
        }
    });
});
app.get('/new', function(req, res){
    return res.render('newPost');
})
app.post('/new-post', function(req, res){
    blog.create(req.body, function(err, blog){
        if(err){
            console.log('error in creating blog');
        }else{
            return res.redirect('/');
        }
    });
});

app.listen(port, function(req, res){
    console.log(`Server is running on ${port}`);
});