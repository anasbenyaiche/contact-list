const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const { model } = require("../models/User");
// add user
// http://localhost:8000/user/add
router.post("/add", (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
});

// get all users

// http://localhost:8000/user/
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json( users ))
    .catch((err) => console.error(err));
});

// get one user
router.get("/:id", (req,res)=> {
    const _id = req.params.id
    User.findById({_id})
    .then(user => res.json(user))
    .catch(err => console.error(err) )
})
// delete a user
router.delete('/:id', (req,res)=> {
    const _id = req.params.id
    User.findByIdAndRemove({_id})
    .then(user => res.json({message:"user deleted", user}))
    .catch(err=> console.error(err))
})

// update a user
router.put('/:id', (req, res)=> {
    const _id = req.params.id
    const updateUser = req.body
    User.findByIdAndUpdate({_id},updateUser)
    .then(user => res.json({message:"user updated", user}) )
    .catch(err=> console.error(err))

})
module.exports = router