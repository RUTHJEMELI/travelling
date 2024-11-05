import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser, loginUser } from '../api/authService';
import { HiEye, HiEyeOff } from 'react-icons/hi';

function AuthPage() {
	const [isSignUp, setIsSignUp] = useState(true);
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		username: '',
		phone_number: '',
		email: '',
		password: '',
		confirm_password: '',
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			if (isSignUp) {
				if (formData.password !== formData.confirm_password) {
					toast.error('Passwords do not match.');
					return;
				}
				await registerUser(formData);
				toast.success('Registration successful! Welcome on board!'); // Enhanced message
			} else {
				await loginUser({ email: formData.email, password: formData.password });
				toast.success('Login successful! Welcome back!'); // Enhanced message
			}
			navigate('/'); // Navigate to home page after successful action
		} catch (err) {
			const errorMessage =
				err.response?.data?.message || 'An error occurred. Please try again.';
			toast.error(
				isSignUp
					? `Registration failed: ${errorMessage}`
					: `Login failed: ${errorMessage}`
			);
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50'>
			<div className='bg-white shadow-md rounded-lg p-8 max-w-md w-full'>
				<h1 className='text-3xl font-bold text-blue-900 text-center mb-6'>
					{isSignUp ? 'Sign Up' : 'Sign In'}
				</h1>
				<form onSubmit={handleSubmit}>
					{isSignUp && (
						<>
							<input
								type='text'
								name='first_name'
								placeholder='First Name'
								value={formData.first_name}
								onChange={handleChange}
								required
								className='w-full p-2 border border-gray-300 rounded-md mb-4'
							/>
							<input
								type='text'
								name='last_name'
								placeholder='Last Name'
								value={formData.last_name}
								onChange={handleChange}
								required
								className='w-full p-2 border border-gray-300 rounded-md mb-4'
							/>
							<input
								type='text'
								name='username'
								placeholder='Username'
								value={formData.username}
								onChange={handleChange}
								required
								className='w-full p-2 border border-gray-300 rounded-md mb-4'
							/>
							<input
								type='text'
								name='phone_number'
								placeholder='Phone Number e.g +254712345678'
								value={formData.phone_number}
								onChange={handleChange}
								required
								className='w-full p-2 border border-gray-300 rounded-md mb-4'
							/>
						</>
					)}
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={formData.email}
						onChange={handleChange}
						required
						className='w-full p-2 border border-gray-300 rounded-md mb-4'
					/>
					<div className='relative mb-4'>
						<input
							type={showPassword ? 'text' : 'password'}
							name='password'
							placeholder='Password'
							value={formData.password}
							onChange={handleChange}
							required
							className='w-full p-2 border border-gray-300 rounded-md'
						/>
						<span
							onClick={() => setShowPassword(!showPassword)}
							className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
						>
							{showPassword ? <HiEyeOff /> : <HiEye />}
						</span>
					</div>
					{isSignUp && (
						<div className='relative mb-4'>
							<input
								type={showConfirmPassword ? 'text' : 'password'}
								name='confirm_password'
								placeholder='Confirm Password'
								value={formData.confirm_password}
								onChange={handleChange}
								required
								className='w-full p-2 border border-gray-300 rounded-md'
							/>
							<span
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
								className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
							>
								{showConfirmPassword ? <HiEyeOff /> : <HiEye />}
							</span>
						</div>
					)}
					<button
						type='submit'
						className='w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors'
					>
						{isSignUp ? 'Create Account' : 'Login'}
					</button>
				</form>
				<p className='text-gray-600 text-center mt-6'>
					{isSignUp ? 'Already have an account?' : 'New here?'}{' '}
					<span
						onClick={() => setIsSignUp(!isSignUp)}
						className='text-blue-900 font-semibold cursor-pointer'
					>
						{isSignUp ? 'Sign In' : 'Sign Up'}
					</span>
				</p>
			</div>
			<ToastContainer position='top-right' /> {/* Positioning notifications */}
		</div>
	);
}

export default AuthPage;
