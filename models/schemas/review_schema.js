const db = require('../db');
var schema = db.Schema({

    r_mess: { type: String, require: true, trim: true },

    product_id: { type: String, require: true, trim: true }
});


// compilation of schema 
module.exports = db.model('reviewdata', schema, 'review')