const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imgurl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});
const blogApp = mongoose.model('blogApp', blogSchema);
module.exports = blogApp;