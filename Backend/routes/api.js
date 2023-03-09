const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Course = require('../models/course')
const Enroll = require('../models/enroll')
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

// get course details
router.get('/courselist', async (req, res) => {
    try {
        let course = await Course.find();
        res.send(course)

    } catch (error) {
        console.log(error)
    }
})

// add student registration
router.post('/enroll', async (req, res) => {
    try {
        let item = {
            name: req.body.name,
            gender: req.body.gender,
            dob: req.body.dob,
            email: req.body.email,
            phone: req.body.phone,
            qualification: req.body.qualification,
            year: req.body.year,
            course: req.body.course
        }

        const newenroll = new Enroll(item);
        const saveenroll = await newenroll.save();
        res.send(saveenroll);


    } catch (error) {
        console.log(error)
    }
})

// get student enroll details
router.get('/enroll', async (req, res) => {
    try {
        let enroll = await Enroll.find();
        res.send(enroll)

    } catch (error) {
        console.log(error)
    }
})

//approve student registration
router.put('/approve', async (req, res) => {
    let id = req.body._id
    let item = {  //to fetch and save data from front end in server
        status: req.body.status,
    }
    let updateData = { $set: item }
    await Enroll.findOneAndUpdate({ _id: id }, updateData)
    res.json();
})

//reject student registration
router.put('/reject', async (req, res) => {
    let id = req.body._id
    let item = {  //to fetch and save data from front end in server
        status: req.body.status,
    }
    let updateData = { $set: item }
    await Enroll.findOneAndUpdate({ _id: id }, updateData)
    res.json();
})

// Professor dashboard
// approved count
router.get('/approvedcount', async (req, res) => {
    try {
        let approved = await Enroll.find({ "status": "Approved" }).count();
        res.json(approved);

    } catch (error) {
        console.log(error)
    }
})
// Rejected count
router.get('/rejectedcount', async (req, res) => {
    try {
        let rejected = await Enroll.find({ "status": "Rejected" }).count();
        res.json(rejected);

    } catch (error) {
        console.log(error)
    }
})

// Pending count
router.get('/pendingcount', async (req, res) => {
    try {
        let pending = await Enroll.find({ "status": "Pending" }).count();
        res.json(pending);

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;
