import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [emailError, setEmailError] = useState('');
    const [otpError, setOtpError] = useState('');
    const [loading, setLoading] = useState(false);
    const otpInputs = useRef([]);
    const navigate = useNavigate();
    const location = useLocation();

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSendOtp = async (e) => {
        setLoading(true)
        e.preventDefault();
        setEmailError('');


        if (!email) {
            setEmailError('Please enter your email address');
            return;
        }
      
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
     
        try {
            const response = await fetch('http://localhost:5001/api/auth/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, isSignup: false })
            });
            const data = await response.json();
            if (response.ok) {
                console.log('response from back',response)
                setShowOtpForm(true);
            } else {
                console.log('first',data.message)
                throw new Error(data.message || 'Failed to send OTP');
            }
        } catch (error) {
            setEmailError(error.message);
        } finally{
            setLoading(false)
        }
    };

    const handleVerifyOtp = async (e) => {
        setLoading(true)
        e.preventDefault();
        const otpValue = otp.join('');
        if (otpValue.length !== 6) {
            setOtpError('Please enter a valid 6-digit OTP');
            return;
        }

        try {
            const response = await fetch('http://localhost:5001/api/auth/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp: otpValue, isSignup: false })
            });
            const data = await response.json();
            if (response.ok) {
                console.log('responsevfrom verify otp', response)
                localStorage.setItem('token', data.token);
                localStorage.setItem('userData', JSON.stringify(data.user));
                // Dispatch custom event to update navbar
                window.dispatchEvent(new Event('authStateChanged'));
                
                // Redirect to the page they were trying to access, or home
                const from = location.state?.from?.pathname || '/';
                navigate(from, { replace: true });

            } else {
                console.log('error in otp', data.message)
                throw new Error(data.message || 'Invalid OTP');
            }
        } catch (error) {
            setOtpError(error.message);
        }finally{
            setLoading(false)
        }
    };

    const handleOtpChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < 5) {
                otpInputs.current[index + 1].focus();
            }
            if (!value && index > 0) {
                otpInputs.current[index - 1].focus();
            }
        }
    };

    const handleEditPhone = () => {
        setShowOtpForm(false);
        setOtp(['', '', '', '', '', '']);
        setOtpError('');
    };

    const handleResendOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/api/auth/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, isSignup: false })
            });
            const data = await response.json();
            if (!response.ok) {
                console.log('resend otp',response)
                throw new Error(data.message || 'Failed to resend OTP');
            }
            setOtp(['', '', '', '', '', '']);
            otpInputs.current[0].focus();
        } catch (error) {
            console.log('resend error',error.message)
            setOtpError(error.message);
        }
    };

    useEffect(() => {
        if (showOtpForm && otpInputs.current[0]) {
            otpInputs.current[0].focus();
        }
    }, [showOtpForm]);

    return (
        <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-10">
            <div className="w-full max-w-7xl border-2 border-[#CDCDCD] rounded-[1.6rem] shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row bg-[#F7F8FA] lg:bg-transparent">
                    {/* Login Image */}
                    <div className="hidden md:flex flex-1 min-h-[30rem] bg-[#f0f9f3] items-center justify-center">
                        <img src="/assets/Left.svg" alt="Illustration" className="max-w-full h-auto" />
                    </div>

                    {/* Login Form */}
                    <div className="flex-1 p-6 sm:p-8 lg:p-10 bg-white lg:rounded-r-[1.6rem] flex flex-col justify-center max-w-[550px]">
                        <div className="text-center lg:text-left mb-6 flex flex-col justify-center items-center">
                            <div className="font-sans text-3xl font-extrabold mb-4  lg:block">
                                Get<span className="text-[#16A34A]">Skilled</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-2">Login</h2>
                            <p className="text-gray-600 text-xl">
                                Sign in to access your account and continue your learning journey.
                            </p>
                        </div>

                        {/* Email Input Form */}
                        {!showOtpForm ? (
                            <form id="email-form" onSubmit={handleSendOtp} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-lg mb-2">
                                        Email Address*
                                    </label>
                                    <div className="flex border border-[#D1D5DB] rounded-lg overflow-hidden">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email address"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="flex-1 p-3 border-none outline-none text-lg"
                                        />
                                    </div>
                                    {emailError && (
                                        <div className="text-red-500 text-sm mt-1">{emailError}</div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-3 rounded-lg font-medium text-base hover:bg-gray-800 transition-colors mt-6"
                                >
                                   {loading ? 'Send OTP...' :'Send OTP'} 
                                </button>

                                <div className="text-center mt-6 text-base">
                                    Don't have an account?{' '}
                                    <Link to="/signup" className="text-[#16A34A] hover:underline">
                                        Sign Up
                                    </Link>
                                </div>
                            </form>
                        ) : (
                            <div id="otp-form">
                                <div className="text-center lg:text-left mb-6">
                                    <div className="text-xl font-bold mb-2">Verify to Continue</div>
                                    <div className="text-sm mb-6">
                                        We have sent an OTP to <span className="font-semibold">{email}</span>
                                        <a
                                            href="#"
                                            onClick={handleEditPhone}
                                            className="text-[#16A34A] ml-2 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </div>
                                    <div className="text-sm">Enter OTP to continue</div>
                                </div>

                                {otpError && (
                                    <div className="text-red-500 text-sm mb-4 text-center">{otpError}</div>
                                )}

                                <div className="flex gap-2 justify-center mb-6">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            maxLength="1"
                                            className="w-10 h-10 text-center text-lg border border-[#D1D5DB] rounded-lg focus:border-[#16A34A] focus:outline-none"
                                            pattern="[0-9]"
                                            inputMode="numeric"
                                            value={digit}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            ref={(el) => (otpInputs.current[index] = el)}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={handleVerifyOtp}
                                    className="w-full bg-black text-white py-3 rounded-lg font-medium text-base hover:bg-gray-800 transition-colors"
                                >
                                    {loading? 'Continue...': 'Continue'}
                                </button>

                                <div className="text-center mt-6 text-sm">
                                    Didn't receive OTP?{' '}
                                    <a
                                        href="#"
                                        onClick={handleResendOtp}
                                        className="text-[#16A34A] hover:underline"
                                    >
                                        Resend
                                    </a>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center my-6 text-gray-500 text-lg">
                            <span className="flex-1 h-px bg-[#D1D5DB]"></span>
                            <span className="px-4">or login with</span>
                            <span className="flex-1 h-px bg-[#D1D5DB]"></span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                            <button className="flex items-center justify-center py-3 px-6 border border-[#D1D5DB] rounded-full bg-white text-sm gap-2 hover:bg-gray-50 transition-colors">
                                <img src="/assets/google_icon.png" alt="Google" className="h-5" />
                                Google
                            </button>
                            <button className="flex items-center justify-center py-3 px-6 border border-[#D1D5DB] rounded-full bg-white text-sm gap-2 hover:bg-gray-50 transition-colors">
                                <img src="/assets/Apple_icon.png" alt="Apple" className="h-5" />
                                Apple
                            </button>
                        </div>

                        <div className="text-center text-xs text-gray-500 mb-8">
                            *Terms & Conditions Applied
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;