const db = require('./db');
var user = db.Schema({
    f_name: { type: String, require: true, trim: true },
    l_name: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true },
    password: { type: String, require: true, trim: true }
});


user.methods.toJSON = function() {

    var object1 = this.toObject();
    delete object1.password;
    delete object1._id;
    // delete object1.__v;


    return object1;
}

// compilation of schema 
module.exports = db.model('user', user)