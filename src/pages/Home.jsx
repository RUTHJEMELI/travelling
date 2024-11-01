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
				Welcome to WanderWise
			</h1>
			<ReactTyped
				className='text-2xl md:text-3xl text-blue-950 font-semibold text-center'
				strings={[
					"Discover the world's best travel destinations.",
					'Plan with confidence and travel with ease.',
					'Customized travel experiences for every wanderer.',
					'Your journey, our expertise.',
					'Explore, Dream, Discover.',
				]}
				typeSpeed={50}
				backSpeed={40}
				loop
			/>
			<p className='text-lg md:text-xl font-semibold text-white mt-6 max-w-md text-center px-4'>
				At WanderWise, we specialize in creating seamless and unforgettable
				journeys for every traveler. Let us handle the details while you focus
				on the experience.
			</p>
			<Link to='/appointment'>
				<button className='mt-8 px-6 py-3 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800'>
					Book an Appointment
				</button>
			</Link>
		</div>
	);
}

export default HomePage;
