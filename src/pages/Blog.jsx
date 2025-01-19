import React from 'react';

function Blog() {
	let posts = [
		{
			title: 'Exciting Nursing Opportunities in the USA!',
			date: 'January 7, 2025',
			description:
				'Explore life-changing nursing opportunities with Health Carousel International. Start your journey to a rewarding career in the USA today!',
			link: 'https://www.passportusa.com/nursing-jobs-usa',
			highlight: true, // Special highlight
		},
		{
			title: 'Work in Turkey: Visa & Requirements 2025',
			date: 'January 13, 2025',
			description:
				'Learn about Turkey’s 2025 work visa process, including updated requirements and how to apply today.',
			link: 'https://daadscholarship.com/turkey-work-visa-2025-update-requirements-and-application-process/',
		},
		{
			title: 'Mastercard Foundation Scholars Program',
			date: 'January 11, 2025',
			description:
				'Discover the Mastercard Foundation Scholars Program. Apply now to transform your future with education opportunities.',
			link: 'https://opportunitiesforyoungkenyans.co.ke/2025/01/11/the-mastercard-foundation-scholars-program-open/',
		},
		{
			title: 'Exciting Global Career Opportunities',
			date: 'January 13, 2025',
			description:
				'Explore the latest career opportunities worldwide. Connect with recruiters and take your next big step today!',
			link: 'https://chancenkarte.com/en/candidates/',
		},
		{
			title: 'LEAD College of Management MBA Application',
			date: 'January 14, 2025',
			description:
				'Apply for an MBA at LEAD College of Management. Transform your career with world-class education and leadership opportunities.',
			link: 'https://admission.lead.ac.in/lead-college-of-management-mba-application/',
		},
	];

	// Sort posts by date (descending order)
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	// Highlight the latest post
	posts[0].highlight = true;

	return (
		<div className='bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8'>
					Travel Insights & Opportunities
				</h1>
				<p className='text-center text-gray-600 max-w-2xl mx-auto mb-12 px-4'>
					Dive into our blog for tips, insights, and opportunities from around
					the world to inspire your next journey.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{posts.map((post, index) => (
						<div
							key={index}
							className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${
								post.highlight ? 'border-2 border-blue-500' : ''
							}`}
						>
							<h2
								className={`text-xl md:text-2xl font-semibold mb-2 ${
									post.highlight ? 'text-blue-700' : 'text-blue-900'
								}`}
							>
								{post.title}
							</h2>
							<p className='text-sm text-gray-500 mb-4'>{post.date}</p>
							<p className='text-gray-600 mb-4'>{post.description}</p>
							<a
								href={post.link}
								target='_blank'
								rel='noopener noreferrer'
								className={`font-semibold ${
									post.highlight
										? 'text-blue-700 underline hover:text-blue-900'
										: 'text-blue-700 hover:text-blue-900'
								}`}
							>
								Read More &rarr;
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Blog;
