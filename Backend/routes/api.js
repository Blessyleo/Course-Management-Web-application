const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Course = require('../models/course')

// create a new user
router.post('/signup', async (req, res) => {
    try {
        const item = {
            name: req.body.name,
            dob: req.body.dob,
            phone: req.body.phone,
            address: req.body.address,
            role: req.body.role,
            email: req.body.email,
            password: req.body.password
        }

        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            const newuser = new User(item)
            const saveuser = await newuser.save()
            res.send(saveuser)
        }
        return res.json({ message: "Email already registered" });
    } catch (error) {
        console.log(error)
    }


});

// login user
router.post('/login', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, password: req.body.password })
        if (!user) {
            return res.json({ message: "Invalid Credentials" });
        }
        res.send({ 'role': user.role });

    } catch (error) {
        console.log(error)
    }
})

// add course
router.post('/course', async (req, res) => {
    try {
        let item = {
            name: req.body.name,
            duration: req.body.duration,
            startdate: req.body.startdate,
            details: req.body.details,
            price: req.body.price,
        }
        const newcourse = new Course(item)
        const savecourse = await newcourse.save()
        res.send(savecourse)


    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
