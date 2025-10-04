const emailService = require('./services/emailService');

async function testEmailService() {
    console.log('Testing email service...');
    
    try {
        // Test connection
        const isConnected = await emailService.testConnection();
        console.log('Connection test result:', isConnected);
        
        if (isConnected) {
            // Test sending OTP
            console.log('Testing OTP sending...');
            const result = await emailService.sendOTP('test@example.com', '123456', false);
            console.log('OTP sending result:', result);
        }
    } catch (error) {
        console.error('Email service test failed:', error.message);
    }
}

testEmailService();
