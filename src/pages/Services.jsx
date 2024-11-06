import React from 'react';
import {
	FaGlobe,
	FaGraduationCap,
	FaMapMarkedAlt,
	FaPassport,
	FaTruckMoving,
	FaChalkboardTeacher,
} from 'react-icons/fa';

function Services() {
	return (
		<div className='bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8'>
					Our Services
				</h1>
				<p className='text-center text-gray-600 max-w-2xl mx-auto mb-12 px-4'>
					We offer a range of services to support your journey, from education
					and career placements to visa assistance and relocation planning.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* International Job Placement */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaGlobe className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							International Job Placement
						</h3>
						<p className='text-gray-600'>
							We connect you with job opportunities abroad, helping you advance
							your career on a global scale.
						</p>
					</div>

					{/* Student Placement Services */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaGraduationCap className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Student Placement Services
						</h3>
						<p className='text-gray-600'>
							Find the right educational opportunities for your academic and
							career goals with our expert placement services.
						</p>
					</div>

					{/* Travel Consultation and Planning */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaMapMarkedAlt className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Travel Consultation and Planning
						</h3>
						<p className='text-gray-600'>
							Plan your travels with ease—our consultation services cover every
							detail to make your journey seamless.
						</p>
					</div>

					{/* Visa Assistance */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaPassport className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Visa Assistance
						</h3>
						<p className='text-gray-600'>
							Our team assists with visa applications and documentation,
							ensuring you’re ready for travel.
						</p>
					</div>

					{/* Relocation Services */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaTruckMoving className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Relocation Services
						</h3>
						<p className='text-gray-600'>
							We help with your move, from logistics to settling in, making your
							relocation smooth and stress-free.
						</p>
					</div>

					{/* Career Counseling and Guidance */}
					<div className='bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
						<FaChalkboardTeacher className='text-blue-900 text-5xl mx-auto mb-4' />
						<h3 className='text-xl md:text-2xl font-semibold mb-2'>
							Career Counseling and Guidance
						</h3>
						<p className='text-gray-600'>
							Get personalized guidance to help you navigate your career path
							and make informed decisions.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
