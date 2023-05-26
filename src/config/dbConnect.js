const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://admin:tech123@renata.tje13jp.mongodb.net/delas");

let db = mongoose.connection;

module.exports = db