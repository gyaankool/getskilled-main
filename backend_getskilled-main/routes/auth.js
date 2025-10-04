const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const emailService = require('../services/emailService');
require('dotenv').config();

// Generate OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Generate JWT token
function generateToken(user) {
    return jwt.sign(
        { 
            userId: user._id,
            email: user.email 
        },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '15d' }
    );
}

// Send OTP via Email
router.post('/send-otp', async (req, res) => {
    try {
        const { email, name, isSignup } = req.body;
        
        // Validate email
        if (!email || !email.includes('@')) {
            return res.status(400).json({ 
                success: false,
                message: 'Invalid email address' 
            });
        }

        // Validate name for signup
        if (isSignup && !name) {
            return res.status(400).json({ 
                success: false,
                message: 'Name is required for signup' 
            });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        
        if (isSignup && existingUser) {
            return res.status(400).json({ 
                success: false,
                message: 'User already exists with this email' 
            });
        }
        
        if (!isSignup && !existingUser) {
            return res.status(404).json({ 
                success: false,
                message: 'User not found. Please sign up first.' 
            });
        }

        // Generate OTP
        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // Save or update user
        if (isSignup) {
            const user = new User({
                email,
                name,
                otp: { code: otp, expiresAt: otpExpiry }
            });
            await user.save();
        } else {
            await User.findOneAndUpdate(
                { email },
                { otp: { code: otp, expiresAt: otpExpiry } }
            );
        }

        // Send OTP via email
        await emailService.sendOTP(email, otp, isSignup);

        res.status(200).json({ 
            success: true,
            message: 'OTP sent successfully to your email',
            email: email
        });

    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ 
            success: false,
            message: error.message || 'Error sending OTP' 
        });
    }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp, isSignup } = req.body;

        // Validate input
        if (!email || !otp) {
            return res.status(400).json({ 
                success: false,
                message: 'Email and OTP are required' 
            });
        }

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ 
                success: false,
                message: 'User not found' 
            });
        }

        // Check OTP
        if (!user.otp || user.otp.code !== otp) {
            return res.status(400).json({ 
                success: false,
                message: 'Invalid OTP' 
            });
        }

        // Check OTP expiry
        if (new Date() > user.otp.expiresAt) {
            return res.status(400).json({ 
                success: false,
                message: 'OTP expired' 
            });
        }

        // Clear OTP and update user
        user.otp = undefined;
        if (isSignup) {
            user.isVerified = true;
        }
        user.lastLogin = new Date();
        await user.save();

        // Generate token
        const token = generateToken(user);

        res.status(200).json({
            success: true,
            message: isSignup ? 'Signup successful' : 'Login successful',
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                isVerified: user.isVerified,
                lastLogin: user.lastLogin
            }
        });

    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ 
            success: false,
            message: 'Error verifying OTP' 
        });
    }
});

// Verify Token (for protected routes)
router.post('/verify-token', async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({ 
                success: false,
                message: 'Token is required' 
            });
        }

        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        
        // Find user
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ 
                success: false,
                message: 'User not found' 
            });
        }

        res.status(200).json({
            success: true,
            message: 'Token is valid',
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                isVerified: user.isVerified,
                lastLogin: user.lastLogin
            }
        });

    } catch (error) {
        console.error('Error verifying token:', error);
        
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ 
                success: false,
                message: 'Invalid token' 
            });
        }
        
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                success: false,
                message: 'Token expired' 
            });
        }

        res.status(500).json({ 
            success: false,
            message: 'Error verifying token' 
        });
    }
});

// Test Email Service
router.get('/test-email', async (req, res) => {
    try {
        const isConnected = await emailService.testConnection();
        
        if (isConnected) {
            res.status(200).json({
                success: true,
                message: 'Email service is working correctly'
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'Email service connection failed'
            });
        }
    } catch (error) {
        console.error('Error testing email service:', error);
        res.status(500).json({
            success: false,
            message: 'Error testing email service'
        });
    }
});

module.exports = router;