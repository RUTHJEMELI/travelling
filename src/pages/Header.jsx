import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the menu

const Header = () => {
	const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu
	const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
	const userPhoto = 'path/to/user/photo.jpg'; // Placeholder for user photo

	const toggleMenu = () => {
		setIsOpen(!isOpen); // Toggle the menu open/close state
	};

	const handleLogout = () => {
		setIsLoggedIn(false); // Set the login state to false on logout
	};

	return (
		<div className='bg-blue-950 text-white sticky top-0'>
			<div className='p-4 flex flex-col md:flex-row justify-between items-center'>
				{/* Logo and Company Name */}
				<div className='flex items-center mb-2 md:mb-0'>
					<Link to='/' className='flex items-center space-x-2'>
						<img
							src={logo}
							alt='Logo'
							style={{ width: '70px', height: '70px' }}
							className='rounded-full'
						/>
						<h2 className='font-bold text-xl'>WanderWise Consultancy</h2>
					</Link>
				</div>

				{/* Hamburger icon for mobile */}
				<div className='md:hidden cursor-pointer' onClick={toggleMenu}>
					{isOpen ? (
						<FaTimes className='text-3xl' />
					) : (
						<FaBars className='text-3xl' />
					)}
				</div>

				{/* Navigation Links */}
				<ul
					className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 font-bold ${
						isOpen ? 'flex' : 'hidden'
					} md:flex`}
				>
					<li>
						<Link
							to='/about'
							className='hover:text-gray-300'
							onClick={() => setIsOpen(false)}
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							to='/contact'
							className='hover:text-gray-300'
							onClick={() => setIsOpen(false)}
						>
							Contact
						</Link>
					</li>
					<li>
						<Link
							to='/blog'
							className='hover:text-gray-300'
							onClick={() => setIsOpen(false)}
						>
							Blog
						</Link>
					</li>
					<li>
						<Link
							to='/services'
							className='hover:text-gray-300'
							onClick={() => setIsOpen(false)}
						>
							Services
						</Link>
					</li>
				</ul>

				{/* User Authentication */}
				<div className='font-bold flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-2 md:mt-0'>
					{isLoggedIn ? (
						<>
							<img
								src={userPhoto}
								alt='User'
								className='w-10 h-10 rounded-full' // Adjust size as needed
							/>
							<button onClick={handleLogout} className='hover:text-gray-300'>
								Logout
							</button>
						</>
					) : (
						<>
							<Link to='/sign'>
								<button className='hover:text-gray-300'>Sign Up</button>
							</Link>
							<Link to='/sign'>
								<button className='hover:text-gray-300'>Sign In</button>
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
