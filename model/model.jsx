const mongoose = require('mongoose')



const UserSchema = mongoose.Schema({

    postImage: { type: String },
    author: { type: String, required: [true, "Please provide Author name"] },
    location: { type: String, required: [true, "Please provide location"] },
    description: { type: String, required: [true, "Please provide description"] },
    date: { type: String },
    likes: Number

})

module.exports = {User:mongoose.model ("InstaUser", UserSchema)}