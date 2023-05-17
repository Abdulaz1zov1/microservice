const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    password: String,
    role : {
        type : Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now()
    }
})  

userSchema.pre('save' , async function(next) {
    if(!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
});
  

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare( enteredPassword, this.password);
}

module.exports = mongoose.model('User', userSchema)