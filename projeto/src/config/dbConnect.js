const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://admin:Marciano1@delis.zf4xszt.mongodb.net/delas")
let db = mongoose.connection;

module.exports = db