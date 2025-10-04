const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

// Middleware
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:3000',
        'https://getskilled-main.onrender.com',
        'https://get-skilled.onrender.com'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://gyaankooldatabase:abhi1234@cluster0.rcotzsy.mongodb.net/getskilled?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    maxPoolSize: 10,
    serverSelectionRetryDelayMS: 5000,
    heartbeatFrequencyMS: 10000,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    // Retry connection after 5 seconds
    setTimeout(() => {
        console.log('Retrying MongoDB connection...');
        mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        }).catch(retryErr => {
            console.error('MongoDB retry failed:', retryErr);
            process.exit(1);
        });
    }, 5000);
});

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'GetSkilled Backend API is running!',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        endpoints: {
            health: '/health',
            apiHealth: '/api/health',
            auth: '/api/auth'
        }
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// API health check endpoint (for Render)
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5003;
console.log(`Attempting to start server on port ${PORT}`);
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error(`❌ Failed to start server on port ${PORT}:`, err.message);
    process.exit(1);
}); 