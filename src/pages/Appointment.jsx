import React, { useState } from 'react';

const Appointment = () => {
	const [destination, setDestination] = useState('');
	const [startPoint, setStartPoint] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// Here, you can handle the data (e.g., send it to an API)
		const appointmentData = {
			destination,
			startPoint,
			phoneNumber,
		};

		console.log('Appointment Data:', appointmentData);
		// Reset the form fields
		setDestination('');
		setStartPoint('');
		setPhoneNumber('');
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-100 p-4'>
			<h1 className='text-4xl font-bold mb-6 text-blue-950'>
				Book an Appointment
			</h1>
			<form
				onSubmit={handleSubmit}
				className='bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-md'
			>
				<div>
					<label className='block text-gray-700' htmlFor='destination'>
						Destination
					</label>
					<input
						type='text'
						id='destination'
						value={destination}
						onChange={(e) => setDestination(e.target.value)}
						required
						className='mt-1 p-2 border border-gray-300 rounded-md w-full'
					/>
				</div>
				<div>
					<label className='block text-gray-700' htmlFor='startPoint'>
						Start Point
					</label>
					<input
						type='text'
						id='startPoint'
						value={startPoint}
						onChange={(e) => setStartPoint(e.target.value)}
						required
						className='mt-1 p-2 border border-gray-300 rounded-md w-full'
					/>
				</div>
				<div>
					<label className='block text-gray-700' htmlFor='phoneNumber'>
						Phone Number
					</label>
					<input
						type='tel'
						id='phoneNumber'
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						required
						className='mt-1 p-2 border border-gray-300 rounded-md w-full'
					/>
				</div>
				<button
					type='submit'
					className='w-full mt-4 px-4 py-2 bg-blue-950 text-white font-semibold rounded-md hover:bg-blue-800'
				>
					Book Appointment
				</button>
			</form>
		</div>
	);
};

export default Appointment;
