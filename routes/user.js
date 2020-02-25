var express = require('express');
var services = require('/user_services')
var router = express.Router();

//Register the user and its details

router.post('/register', function(req, res) {
    console.log('sdfhjkjkfh')
    services.register(req, res)
})

//Delete the user through user id

router.delete('/delete', function(req, res) {
    services.delete_user(req, res)
})

//Update the user detail through user id

router.put('/update', function(req, res) {
    services.update_user(req, res)
})

//Retreive the user details through the database

router.get('/users', function(req, res) {
    services.get_users(req, res)
})

module.exports = router;