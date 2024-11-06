import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone_number: '',
		starting_city: '',
		destination_city: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				'https://travelling-agency-backend-django-2.onrender.com/booking/booking/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				toast.success('Appointment booked successfully!');
			} else {
				toast.error('Failed to book appointment. Please try again.');
			}
		} catch (error) {
			console.error('Error:', error);
			toast.error('An error occurred. Please try again later.');
		}
	};

	return (
		<section className='bg-gray-50 text-gray-800 py-12 px-6 md:px-12 lg:px-24'>
			<ToastContainer /> {/* Toast container for displaying notifications */}
			<div className='container mx-auto'>
				<h1 className='text-4xl font-bold text-center text-blue-900 mb-6'>
					Get in Touch
				</h1>
				<p className='text-center text-gray-600 mb-8'>
					Have questions, need assistance, or ready to start planning your next
					journey? Reach out to us—we’re here to help!
				</p>

				<div className='flex flex-col md:flex-row gap-8'>
					{/* Contact Form */}
					<div className='md:w-2/3'>
						<form
							className='bg-white shadow-md rounded-lg px-8 py-6'
							onSubmit={handleSubmit}
						>
							<div className='mb-4'>
								<label
									htmlFor='name'
									className='block text-gray-700 font-semibold'
								>
									Name
								</label>
								<input
									type='text'
									id='name'
									name='name'
									className='w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900'
									placeholder='Your name'
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>

							{/* Email Input */}
							<div className='mb-4'>
								<label
									htmlFor='email'
									className='block text-gray-700 font-semibold'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									className='w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900'
									placeholder='Your email'
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>

							{/* Phone Number Input */}
							<div className='mb-4'>
								<label
									htmlFor='phone_number'
									className='block text-gray-700 font-semibold'
								>
									Phone Number
								</label>
								<input
									type='tel'
									id='phone_number'
									name='phone_number'
									className='w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900'
									placeholder='Your phone number start with country code i.e +'
									value={formData.phone_number}
									onChange={handleChange}
									required
								/>
							</div>

							{/* Starting City Input */}
							<div className='mb-4'>
								<label
									htmlFor='starting_city'
									className='block text-gray-700 font-semibold'
								>
									Starting City
								</label>
								<input
									type='text'
									id='starting_city'
									name='starting_city'
									className='w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900'
									placeholder='Starting city'
									value={formData.starting_city}
									onChange={handleChange}
									required
								/>
							</div>

							{/* Destination City Input */}
							<div className='mb-4'>
								<label
									htmlFor='destination_city'
									className='block text-gray-700 font-semibold'
								>
									Destination City
								</label>
								<input
									type='text'
									id='destination_city'
									name='destination_city'
									className='w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900'
									placeholder='Destination city'
									value={formData.destination_city}
									onChange={handleChange}
									required
								/>
							</div>

							<button
								type='submit'
								className='w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors'
							>
								Make Appointment
							</button>
						</form>
					</div>

					{/* Contact Information */}
					<div className='md:w-1/3 text-center md:text-left'>
						<h2 className='text-2xl font-bold text-blue-900 mb-4'>
							Contact Info
						</h2>
						<p className='text-md text-gray-600 mb-4'>
							Have any questions? Our team is here to make your travel dreams
							come true!
						</p>
						<p className='text-gray-600'>
							<strong>Email:</strong> info@wanderwise.com
						</p>
						<p className='text-gray-600'>
							<strong>Phone:</strong> +254-123-456-789
						</p>
						<p className='text-gray-600'>
							<strong>Location:</strong> Nairobi, Kenya
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
