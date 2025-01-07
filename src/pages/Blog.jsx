import React from 'react';

function Blog() {
	const posts = [
		{
			title: 'Exciting Nursing Opportunities in the USA!',
			date: 'January 7, 2025',
			description:
				'Explore life-changing nursing opportunities with Health Carousel International. Start your journey to a rewarding career in the USA today!',
			link: 'https://www.passportusa.com/nursing-jobs-usa',
			highlight: true, // New property to differentiate this post
		},
		{
			title: 'Top 10 Travel Destinations for 2024',
			date: 'October 1, 2024',
			description:
				'Discover the must-visit travel destinations for the upcoming year, including hidden gems and popular spots.',
			link: '#',
		},
		{
			title: 'Packing Essentials for Every Traveler',
			date: 'September 15, 2024',
			description:
				'A comprehensive guide to packing essentials, helping you stay prepared without the extra baggage.',
			link: '#',
		},
		{
			title: 'How to Travel on a Budget',
			date: 'August 20, 2024',
			description:
				'Maximize your travel experience without breaking the bank. Explore budget-friendly tips for every destination.',
			link: '#',
		},
		{
			title: 'Tips for Solo Travelers',
			date: 'August 5, 2024',
			description:
				'Traveling solo can be an incredible experience. Here are essential tips for safe and enjoyable solo journeys.',
			link: '#',
		},
	];

	return (
		<div className='bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8'>
					Travel Insights & Tips
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
