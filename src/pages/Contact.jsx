import React from 'react';

function Contact() {
	return (
		<section className='bg-gray-50 text-gray-800 py-12 px-6 md:px-12 lg:px-24'>
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
						<form className='bg-white shadow-md rounded-lg px-8 py-6'>
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
									required
								/>
							</div>
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
									required
								/>
							</div>
							<div className='mb-4'>
								<label
									htmlFor='message'
									className='block text-gray-700 font-semibold'
								>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									className='w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900'
									rows='4'
									placeholder='How can we assist you?'
									required
								></textarea>
							</div>
							<button
								type='submit'
								className='w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors'
							>
								Send Message
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
						<div className='flex justify-center md:justify-start space-x-4 mt-6'>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-900 hover:text-blue-700'
							>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-900 hover:text-blue-700'
							>
								<i className='fab fa-twitter'></i>
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-900 hover:text-blue-700'
							>
								<i className='fab fa-instagram'></i>
							</a>
							<a
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-900 hover:text-blue-700'
							>
								<i className='fab fa-linkedin'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
