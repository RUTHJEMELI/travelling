import React from 'react';
import {
	FaPlaneDeparture,
	FaHotel,
	FaMapSigns,
	FaPassport,
	FaCar,
	FaConciergeBell,
} from 'react-icons/fa';

function Services() {
	return (
		<div className='bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8'>
					Our Services
				</h1>
				<p className='text-center text-gray-600 max-w-2xl mx-auto mb-12 px-4'>
					We offer a range of tailored travel consultancy services to help make
					your journey seamless, adventurous, and unforgettable.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* Flight Booking */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaPlaneDeparture className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Flight Booking
						</h3>
						<p className='text-gray-600'>
							Let us take care of your flight reservations to give you a smooth
							start to your journey.
						</p>
					</div>

					{/* Accommodation */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaHotel className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Accommodation
						</h3>
						<p className='text-gray-600'>
							We find the best accommodation options that suit your budget and
							preferences.
						</p>
					</div>

					{/* Guided Tours */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaMapSigns className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Guided Tours
						</h3>
						<p className='text-gray-600'>
							Explore with confidence—our guided tours cover every detail to
							make your experience memorable.
						</p>
					</div>

					{/* Visa Assistance */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaPassport className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Visa Assistance
						</h3>
						<p className='text-gray-600'>
							Our experts handle visa applications and documentation, so you can
							focus on the fun parts of travel.
						</p>
					</div>

					{/* Car Rentals */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaCar className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Car Rentals
						</h3>
						<p className='text-gray-600'>
							From airport pickups to local travel, we provide convenient car
							rental solutions for your trip.
						</p>
					</div>

					{/* Custom Itineraries */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaConciergeBell className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Custom Itineraries
						</h3>
						<p className='text-gray-600'>
							Our consultants create tailored itineraries to match your unique
							travel goals and schedule.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
