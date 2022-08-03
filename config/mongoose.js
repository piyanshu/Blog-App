const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/blog_app', { useUnifiedTopology: true, useNewUrlParser: true, });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb connection error'));
db.once('open', function(){
    console.log('successfully connected to db');
});