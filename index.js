const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const dotenv = require("dotenv")

const app = express();
dotenv.config();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const db = require('./config/mongoose');
const blog = require('./models/blog');

app.get('/', function(req, res){
    blog.find({}, function(err, blogs){
        if(err){
            console.log('Error in finding post');
        }else{
            return res.render('index', {
                blogs: blogs
            });
        }
    });
});
app.get('/blogs/new', function(req, res){
    return res.render('newPost');
});
app.get('/blog/edit', function(req, res){
    blog.findById(req.query.id, function(err, blog){
        if(err){
            console.log('error in finding the blog');
        }
        else{
            return res.render('edit', {blog: blog});
        }
    });
});
app.post('/blogs', function(req, res){
    blog.create(req.body, function(err, blog){
        if(err){
            console.log('error in creating blog');
        }else{
            return res.redirect('/');
        }
    });
});
app.post('/blogs/edit', function(req, res){
    blog.findByIdAndUpdate(req.query.id, req.body, function(err, updatedblog){
        if(err){
            console.log('error in updating a blog');
        }else{
            return res.redirect('/');
        }
    });
});
app.get('/blog/delete', function(req, res){
    blog.findByIdAndDelete(req.query.id, function(err){
        if(err){
            console.log('error in finding the blog');
        }else{
            return res.redirect('/');
        }
    });
});
app.get('/show/:id', function(req, res){
    blog.findById(req.params.id, function(err, blog){
        if(err){
            console.log('error in finding the blog');
        }else{
            return res.render('show', {blog: blog});
        }
    });
});
app.listen(process.env.PORT || port, function(req, res){
    console.log(`Server is running on ${port}`);
});