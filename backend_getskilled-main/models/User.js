const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: false,
        unique: true,
        sparse: true,
        trim: true,
        default: undefined
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    otp: {
        code: String,
        expiresAt: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date
    }
});

// Index for faster queries
userSchema.index({ phone: 1 });
userSchema.index({ email: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User; 