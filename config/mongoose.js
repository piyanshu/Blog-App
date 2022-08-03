var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog_app', { useUnifiedTopology: true, useNewUrlParser: true, });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb connection error'));
db.once('open', function(){
    console.log('successfully connected to db');
})