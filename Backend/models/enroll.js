const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrollSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    qualification: { type: String, required: true },
    year: { type: Number, required: true },
    course: { type: String, required: true },
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model('enroll', enrollSchema);
