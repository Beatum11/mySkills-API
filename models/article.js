const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    post: String
});

module.exports = new mongoose.model("articles", articleSchema);