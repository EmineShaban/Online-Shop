const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 
    email:{
        type: String,
        required:true,
        // minlength:[5,'The username should be at least 5 characters long']
    },
    password: {
        type: String,
        required:true
    }
    // soldProducts:[{
    //     type:mongoose.Types.ObjectId,
    //     ref:'Product'
    // }]
});

const User = mongoose.model('User',userSchema);

module.exports = User;