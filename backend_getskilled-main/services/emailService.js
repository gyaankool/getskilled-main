const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        // Hardcoded email credentials to avoid .env file issues
        const emailConfig = {
            service: 'gmail',
            auth: {
                user: 'smtpgetskilled@gmail.com',
                pass: 'pkjx nsdk pjfw yrck'
            },
            tls: {
                rejectUnauthorized: false
            },
            connectionTimeout: 60000, // 60 seconds
            greetingTimeout: 30000,   // 30 seconds
            socketTimeout: 60000,     // 60 seconds
            pool: true,
            maxConnections: 5,
            maxMessages: 100,
            rateDelta: 20000,
            rateLimit: 5
        };

        this.transporter = nodemailer.createTransport(emailConfig);
    }

    async sendOTP(to, otp, isSignup = false) {
        const subject = isSignup 
            ? 'Welcome to GetSkilled - Verify Your Account' 
            : 'GetSkilled Login Code';
        
        const html = this.generateOTPEmail(otp, isSignup);

        const mailOptions = {
            from: '"GetSkilled Team" <smtpgetskilled@gmail.com>',
            to: to,
            subject: subject,
            html: html
        };

        // Retry mechanism
        const maxRetries = 3;
        let lastError;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                console.log(`Email sending attempt ${attempt}/${maxRetries}`);
                
                // Test connection first
                await this.transporter.verify();
                
                const result = await this.transporter.sendMail(mailOptions);
                console.log('Email sent successfully:', result.messageId);
                return { success: true, messageId: result.messageId };
            } catch (error) {
                lastError = error;
                console.error(`Email sending attempt ${attempt} failed:`, error.message);
                
                if (attempt < maxRetries) {
                    // Wait before retry (exponential backoff)
                    const delay = Math.pow(2, attempt) * 1000;
                    console.log(`Retrying in ${delay}ms...`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }

        // All retries failed
        console.error('All email sending attempts failed:', lastError);
        
        // Handle specific error types
        if (lastError.code === 'ECONNECTION' || lastError.code === 'ETIMEDOUT') {
            throw new Error('Connection timeout. Please check your internet connection and try again.');
        } else if (lastError.code === 'EAUTH') {
            throw new Error('Authentication failed. Please check email credentials.');
        } else if (lastError.code === 'EMESSAGE') {
            throw new Error('Message sending failed. Please try again.');
        } else {
            throw new Error('Failed to send email after multiple attempts: ' + lastError.message);
        }
    }

    generateOTPEmail(otp, isSignup) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>GetSkilled ${isSignup ? 'Welcome' : 'Login'}</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #16A34A, #059669); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">GetSkilled</h1>
                    <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Learn. Grow. Succeed.</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                    <h2 style="color: #16A34A; margin-top: 0;">${isSignup ? 'Welcome to GetSkilled!' : 'Your Login Code'}</h2>
                    
                    <p style="font-size: 16px; margin-bottom: 20px;">
                        ${isSignup 
                            ? 'Thank you for joining GetSkilled! Please verify your account using the code below:'
                            : 'Use the following code to log in to your GetSkilled account:'
                        }
                    </p>
                    
                    <div style="background: white; border: 2px solid #16A34A; padding: 25px; text-align: center; border-radius: 8px; margin: 25px 0;">
                        <div style="font-size: 32px; font-weight: bold; color: #16A34A; letter-spacing: 5px; font-family: 'Courier New', monospace;">
                            ${otp}
                        </div>
                    </div>
                    
                    <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 0; color: #856404; font-size: 14px;">
                            <strong>⏰ This code will expire in 10 minutes.</strong>
                        </p>
                    </div>
                    
                    <p style="font-size: 14px; color: #666; margin-top: 25px;">
                        If you didn't request this ${isSignup ? 'verification' : 'login'} code, please ignore this email.
                    </p>
                    
                    <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
                    
                    <p style="font-size: 12px; color: #999; text-align: center; margin: 0;">
                        © 2024 GetSkilled. All rights reserved.<br>
                        This is an automated message, please do not reply.
                    </p>
                </div>
            </body>
            </html>
        `;
    }

    async testConnection() {
        try {
            await this.transporter.verify();
            console.log('✅ Gmail SMTP connection successful');
            return true;
        } catch (error) {
            console.error('❌ Gmail SMTP connection failed:', error.message);
            return false;
        }
    }
}

module.exports = new EmailService();
