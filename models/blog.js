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
},{
    timestamps:true
});
const blogApp = mongoose.model('blog_app', blogSchema);
module.exports = blogApp;