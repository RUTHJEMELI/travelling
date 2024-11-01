import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div>
			<div className='bg-blue-900 text-white py-8 px-4'>
				<div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
					{/* Logo / Company Name */}
					<div className='text-center md:text-left mb-6 md:mb-0'>
						<h2 className='text-2xl font-bold'>WanderWise</h2>
						<p className='text-sm text-gray-400 mt-2'>
							Your trusted travel consultancy.
						</p>
					</div>

					{/* Navigation Links */}
					<div className='mb-6 md:mb-0 flex flex-col md:items-start text-center md:text-left'>
						<h3 className='font-semibold text-lg mb-3'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/services' className='text-gray-400 hover:text-white'>
									Services
								</Link>
							</li>
							<li>
								<Link to='/about' className='text-gray-400 hover:text-white'>
									About Us
								</Link>
							</li>
							<li>
								<Link to='/blog' className='text-gray-400 hover:text-white'>
									Blog
								</Link>
							</li>
							<li>
								<Link to='/contact' className='text-gray-400 hover:text-white'>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Media Icons */}
					<div className='flex flex-col items-center md:items-start text-center'>
						<h3 className='font-semibold text-lg mb-3'>Follow Us</h3>
						<div className='flex space-x-4'>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-white'
							>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-white'
							>
								<i className='fab fa-twitter'></i>
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-white'
							>
								<i className='fab fa-instagram'></i>
							</a>
							<a
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-white'
							>
								<i className='fab fa-linkedin'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Bottom Section */}
			<div className='bg-white text-center text-black text-sm py-4'>
				&copy; {new Date().getFullYear()} WanderWise. All rights reserved.
			</div>
		</div>
	);
}

export default Footer;
