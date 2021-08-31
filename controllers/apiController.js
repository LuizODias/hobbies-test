const hobbies = require('../models/hobbiesModel');
const users = require('../models/userModel');

exports.test = function (req, res) {
    res.send('Hello World! Test Controller');
}

exports.createUser = function (req, res) {
    console.log('createUser: ', req.body);
    users.create(req.body).then(function(user){
        res.send(user)
    })
};

exports.readUsers = function (req, res) {
    console.log('readUsers');
    users.find({}).then(function(user){
        res.send(user);
    });
};

exports.updateUser = function (req, res, next) {
    console.log('updateUser: ', req.params.id);
    users.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        users.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        });
    }).catch(next);
};

exports.deleteUser = function (req, res, next) {
    console.log('deleteUser: ', req.params.id);
    users.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user)
    }).catch(next);
};

exports.createHobbie = function (req, res) {
    console.log('createHobbie: ', req.body);
    hobbies.create(req.body).then(function(hobbie){
        res.send(hobbie)
    })
};

exports.readHobbies = function (req, res) {
    console.log('readHobbies');
    users.find({}).then(function(user){
        res.send(user);
    })
};

exports.updateHobbie = function (req, res, next) {
    console.log('updateHobbie: ', req.params.id);
    hobbies.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        hobbies.findOne({_id: req.params.id}).then(function(hobbie){
            res.send(hobbie);
        });
    }).catch(next);
};

exports.deleteHobbie = function (req, res, next) {
    console.log('deleteHobbie: ', req.params.id);
    hobbies.findByIdAndRemove({_id: req.params.id}).then(function(hobbie){
        res.send(hobbie)
    }).catch(next);
};
