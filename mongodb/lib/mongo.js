var mongoose = require("mongoose");
var uri = 'mongodb://localhost:27017/myblog';
var db = mongoose.createConnection(uri);
module.exports = db