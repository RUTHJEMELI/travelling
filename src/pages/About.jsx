import React from 'react';

function About() {
	return (
		<section className='bg-white text-gray-800 py-12 px-6 md:px-12 lg:px-24'>
			<div className='container mx-auto text-center'>
				<h1 className='text-4xl font-bold mb-6 text-blue-900'>
					About WanderWise
				</h1>
				<p className='text-lg leading-relaxed text-gray-600 mb-8'>
					At WanderWise, we believe in journeys that go beyond ticking boxes on
					a bucket list. We’re here to help you turn your travel dreams into
					carefully curated, unforgettable adventures. Whether you’re looking to
					unwind on a secluded beach, immerse yourself in rich cultures, or
					explore bustling city streets, WanderWise is dedicated to making it
					happen—seamlessly and uniquely.
				</p>

				<div className='flex flex-col md:flex-row justify-center items-center gap-8'>
					<div className='md:w-1/3 text-left'>
						<h2 className='text-2xl font-semibold text-blue-900 mb-4'>
							Who We Are
						</h2>
						<p className='text-md text-gray-600'>
							We're a team of travel enthusiasts, planners, and logistics
							experts with a simple mission: to make your travel experience as
							rewarding and stress-free as possible. From meticulous planning to
							tailoring every last detail, we take care of it all so you can
							focus on what matters most: the adventure.
						</p>
					</div>

					<div className='md:w-1/3 text-left'>
						<h2 className='text-2xl font-semibold text-blue-900 mb-4'>
							Why Choose Us
						</h2>
						<p className='text-md text-gray-600'>
							Travel is personal, and so is our approach. We’re not here to
							offer one-size-fits-all packages. Our goal is to understand your
							travel style, preferences, and vision, so we can deliver a trip
							that feels truly yours. With WanderWise, you’re not just a
							tourist; you're an explorer with a tailored path.
						</p>
					</div>

					<div className='md:w-1/3 text-left'>
						<h2 className='text-2xl font-semibold text-blue-900 mb-4'>
							What We Offer
						</h2>
						<p className='text-md text-gray-600'>
							From solo escapes to family vacations and corporate retreats, we
							specialize in crafting diverse travel experiences. Our services
							include itinerary planning, booking management, local guidance,
							and personalized recommendations to make sure every moment counts.
						</p>
					</div>
				</div>

				<div className='mt-12'>
					<a
						href='#contact'
						className='inline-block bg-blue-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors'
					>
						Get in Touch
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
