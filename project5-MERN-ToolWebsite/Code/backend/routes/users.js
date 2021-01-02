var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UsersModel = require('../models/user');
var gravatar = require('gravatar');


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  UsersModel.findById(req.params.id, (err, r)=>{
    if (err) throw err;
    if (r){
      res.send(r);
    }
  })
});
router.post('/login', function(req, res, next) {
  UsersModel.findOne({email : req.body.email}, (err, r)=>{
    if (err) throw err;
    if (!r){
      res.send("user not found");
    }
    else if (r.password == req.body.password){
      res.json(r);
    }
    else{
      res.send("wrong password");
    }
  })
});
router.post('/signup',  function(req, res, next) {
  UsersModel.findOne({email : req.body.email},  (err, r)=>{
    if (err) throw err;
    if (r){
      res.send("user already registered");
    }
    else{
      // const img =  gravatar.url("a@a.com",{s:"200", d:"mp"});
      const user =  new UsersModel({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        // phone: req.body.phone,
        // avatar: img
    });
    user.save()
    .then(data =>{
      res.json(data)
    })
    }

  })
});
router.post('/facebook', function(req, res, next) {
  UsersModel.findOne({email : req.body.email}, (err, r)=>{
    if (err) throw err;
    if (r){
      res.json(r);
    }
    else{
      const user = new UsersModel({
        fullName: req.body.fullName,
        email: req.body.email,
        avatar: req.body.avatar
    });
    user.save()
    .then(data =>{
      res.json(data)
    })
    }

  })
});

router.put('/update/:id',  function(req, res, next) {
  UsersModel.findByIdAndUpdate(req.params.id,{fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,},  (err, r)=>{
    if (err) throw err;
    if (r){
      res.json(r);
    }
  })
});

module.exports = router;
