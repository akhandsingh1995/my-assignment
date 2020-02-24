// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.text());
// app.use(bodyParser.json()); // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
//     extended: true
// }));
// mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true });
// var db = mongoose.connection
//     .once('open', () => console.log('Connected to Database'))
//     .on("error", (err) => {
//         console.log("Error: ", err);
//         return;
//     });

// app.listen(4600, () => console.log('Server is Listening on port 4500..'));


const bodyParser = require('body-parser');
const user = require('./controllers/user/user');
const login = require('./controllers/login/login');
const product = require('./controllers/products/product');
const review = require('./controllers/reviews/review');
module.exports = function(app) {


    app.use(bodyParser.text())

    app.use('/api/user', user);
    app.use('/api/auth', login);
    app.use('/api/product', product);
    app.use('/api/review', review);

    //invalid url
    app.all('*', function(req, res) {
        res.send("invalid url " + String(req.url));
    });

}