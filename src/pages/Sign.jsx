import React, { useState } from 'react';

function AuthPage() {
	const [isSignUp, setIsSignUp] = useState(true); // Toggle between sign up and sign in
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData); // Replace with API call or form handling
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50'>
			<div className='bg-white shadow-md rounded-lg p-8 max-w-md w-full'>
				<h1 className='text-3xl font-bold text-blue-900 text-center mb-6'>
					{isSignUp ? 'Sign Up' : 'Sign In'}
				</h1>
				<form onSubmit={handleSubmit}>
					{isSignUp && (
						<div className='mb-4'>
							<label
								htmlFor='name'
								className='block text-gray-700 font-medium mb-1'
							>
								Name
							</label>
							<input
								type='text'
								name='name'
								id='name'
								className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900'
								placeholder='Your full name'
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
					)}
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='block text-gray-700 font-medium mb-1'
						>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900'
							placeholder='Your email address'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='password'
							className='block text-gray-700 font-medium mb-1'
						>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='password'
							className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900'
							placeholder='Create a password'
							value={formData.password}
							onChange={handleChange}
							required
						/>
					</div>
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
		</div>
	);
}

export default AuthPage;
