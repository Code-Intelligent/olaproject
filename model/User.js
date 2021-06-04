const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    surname: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    firstname: {
        type: String,
        // required: true
    },
    othername: {
        type: String,
        // required: true
    },
    dateofbirth: {
        type: String,
        // required: true
    },
    nationality: {
        type: String,
        // required: true
    },
    residential: {
        type: String,
        // required: true
    },
    residenttown: {
        type: String,
        // required: true
    },
    occupation: {
        type: String,
        // required: true
    },
    state: {
        type: String,
        // required: true
    },
    local: {
        type: String,
        // required: true
    },
    category: {
        type: String,
        // required: true
    },
    workstatus: {
        type: String,
        // required: true
    },
    // imgUrl: {
    //     type: String,
    //     // required: true
    // },
    date: {
        type: Date,
        default: Date.now
    }
})


const User = mongoose.model('User', UserSchema);

module.exports = User;