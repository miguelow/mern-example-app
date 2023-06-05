const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    mission: {
        type: Number,
        required: true
    },
    rocket: {
        type: String,
        required: true
    },
    launchDate: {
        type: Date,
        required: true
    },
    target: {
        type: String,
        required: true
    },
    flightNumber: {
        type: Number,
        required: true
    },
    customers: {
        type: [ String ],
        required: false
    },
    upcoming: {
        type: Boolean,
        required: true,
    },
    success: {
        type: Boolean,
        required: true,
        default: true,
    },
})