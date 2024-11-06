import React from 'react';

function About() {
	return (
		<section className='bg-white text-gray-800 py-12 px-6 md:px-12 lg:px-24'>
			<div className='container mx-auto text-center'>
				<h1 className='text-4xl font-bold mb-6 text-blue-900'>
					About OpenDoors Traveling and Consultancy Agency
				</h1>
				<p className='text-lg leading-relaxed text-gray-600 mb-8'>
					OpenDoors Traveling and Consultancy Agency was founded with a mission
					to bridge the gap between talent and global opportunities. Based in
					Kenya and registered under the National Employment Authority, we’re
					dedicated to connecting skilled professionals and students with
					life-changing experiences worldwide. From placing students in
					universities abroad to guiding professionals toward international job
					markets, our services are built on a foundation of trust, expertise,
					and a commitment to personal growth.
				</p>

				<div className='flex flex-col md:flex-row justify-center items-stretch gap-8'>
					<div className='md:w-1/3 text-left flex flex-col'>
						<h2 className='text-2xl font-semibold text-blue-900 mb-4'>
							Who We Are
						</h2>
						<p className='text-md text-gray-600'>
							At OpenDoors Traveling and Consultancy Agency, we are a dedicated
							team committed to unlocking global opportunities for individuals
							seeking to grow in their careers, education, and experiences.
							Based in Kenya, we specialize in connecting talented professionals
							with international job opportunities, assisting students with
							placements at prestigious universities abroad, and providing
							expert travel guidance. Our mission is simple: to open doors to a
							world of possibilities. With our core belief in ‘Focusing on
							Opportunities and Travel,’ we empower our clients to broaden their
							horizons and achieve their aspirations. Whether you're exploring
							new career paths, advancing your education, or navigating the
							world of international travel, we’re here to support your journey
							every step of the way.
						</p>
					</div>

					<div className='md:w-1/3 text-left flex flex-col'>
						<h2 className='text-2xl font-semibold text-blue-900 mb-4'>
							Why Choose Us
						</h2>
						<p className='text-md text-gray-600'>
							Choosing OpenDoors means partnering with a team that is truly
							invested in your success. Here’s why we’re the best choice for
							your global journey: Personalized Service We understand that every
							client is unique. That’s why we offer tailored solutions that
							align with your specific career, education, and travel goals.
							Global Connections With a broad network of international partners,
							we open doors to career opportunities and top universities
							worldwide, ensuring you have access to the best global prospects.
							Expert Guidance Our experienced team offers professional advice
							and support throughout your entire journey—from job placements and
							student applications to seamless travel planning. Trust and
							Integrity Registered under the National Employment Authority of
							Kenya, we pride ourselves on transparency, reliability, and the
							trust we’ve built with our clients over the years. Dedicated
							Support We are here for you every step of the way. Our team is
							always ready to answer your questions and provide the guidance you
							need to make informed decisions.
						</p>
					</div>

					<div className='md:w-1/3 text-left flex flex-col'>
						<h2 className='text-2xl font-semibold text-blue-900 mb-4'>
							What We Offer
						</h2>
						<p className='text-md text-gray-600'>
							We offer comprehensive services to unlock global
							opportunities for you. Our International Job Placement service
							connects skilled professionals with top employers in countries
							such as the UK, Ireland, the US, Canada, Turkey, New Zealand,
							Germany, and beyond. Whether you’re seeking permanent, temporary,
							or contract positions, we help match your expertise with exciting
							job opportunities worldwide. For students, our Student Placement
							Services provide expert guidance through the application process
							for universities abroad, helping you choose the right programs,
							navigate applications, and understand visa requirements for
							destinations like the UK, US, Canada, and more. Our Travel
							Consultation and Planning ensures that individuals and groups can
							make informed travel decisions, offering advice on destinations,
							flight bookings, accommodation, and travel needs. We also offer
							Visa Assistance, making the visa application process simpler by
							guiding you through the necessary requirements for working,
							studying, or traveling in countries like Canada, the US, and the
							UK. Additionally, our Career Counseling and Guidance helps you
							with career decisions, resume building, and interview preparation,
							ensuring you're fully equipped for success in the global job
							market.
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
