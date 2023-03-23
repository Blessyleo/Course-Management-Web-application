const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    startdate: { type: Date, required: true },
    details: { type: String, required: true },
    price: { type: String, required: true },
    intake: { type: Number, default: 0}
      
});

module.exports = mongoose.model('course', courseSchema);
