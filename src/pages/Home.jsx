import React from 'react';
import { ReactTyped } from 'react-typed';
import homePageImage from '../assets/pexels-2mephoto-29096581.jpg';
import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<div
			className='h-screen flex flex-col items-center justify-center bg-cover bg-center'
			style={{ backgroundImage: `url(${homePageImage})` }}
		>
			<h1 className='text-4xl md:text-5xl font-bold text-white mb-4 text-center'>
				OpenDoors Traveling and Consultancy Agency
			</h1>
			<ReactTyped
				className='text-2xl md:text-3xl text-blue-950 font-semibold text-center'
				strings={[
					'From placing students in universities abroad',
					'to guiding professionals towards international job markets',
					'our services are built on a foundation of trust, expertise, and a commitment to personal growth!',
					'Explore, Dream, Discover.',
				]}
				typeSpeed={50}
				backSpeed={40}
				loop
			/>
			<p className='text-lg md:text-xl font-semibold text-white mt-6 max-w-md text-center px-4'>
				Welcome to OpenDoors Traveling and Consultancy Agency "At OpenDoors,
				we’re here to help you step into new opportunities. Whether you’re
				looking for work abroad, exploring universities overseas, or need expert
				travel guidance, we’re committed to making your goals a reality. Guided
				by our motto, ‘Focusing on Opportunities and Travel,’ we make global
				connections easy and achievable. Let’s open doors together!
			</p>
			<Link to='/contact'>
				<button className='mt-8 px-6 py-3 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800'>
					Book an Appointment
				</button>
			</Link>
		</div>
	);
}

export default HomePage;
