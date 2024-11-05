import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu
	const [isLoggedIn, setIsLoggedIn] = useState(true); // State to manage login status, set to true if user is logged in

	const toggleMenu = () => {
		setIsOpen(!isOpen); // Toggle the menu open/close state
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
					className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 font-bold md:flex ${
						isOpen ? 'flex' : 'hidden'
					}`}
				>
					<li>
						<Link
							to='/'
							className='hover:text-gray-300 border-b border-transparent hover:border-gray-300 transition duration-300'
							onClick={() => setIsOpen(false)}
						>
							Home
						</Link>
					</li>
					<span className='hidden md:inline-block'>|</span>
					<li>
						<Link
							to='/about'
							className='hover:text-gray-300 border-b border-transparent hover:border-gray-300 transition duration-300'
							onClick={() => setIsOpen(false)}
						>
							About Us
						</Link>
					</li>
					<span className='hidden md:inline-block'>|</span>
					<li>
						<Link
							to='/contact'
							className='hover:text-gray-300 border-b border-transparent hover:border-gray-300 transition duration-300'
							onClick={() => setIsOpen(false)}
						>
							Contact
						</Link>
					</li>
					<span className='hidden md:inline-block'>|</span>
					<li>
						<Link
							to='/blog'
							className='hover:text-gray-300 border-b border-transparent hover:border-gray-300 transition duration-300'
							onClick={() => setIsOpen(false)}
						>
							Blog
						</Link>
					</li>
					<span className='hidden md:inline-block'>|</span>
					<li>
						<Link
							to='/services'
							className='hover:text-gray-300 border-b border-transparent hover:border-gray-300 transition duration-300'
							onClick={() => setIsOpen(false)}
						>
							Services
						</Link>
					</li>
				</ul>

				{/* Welcome Message */}
				<div className='font-bold flex items-center space-x-2 mt-2 md:mt-0'>
					<span role='img' aria-label='waving hand' className='text-2xl'>
						👋
					</span>
					<span className='text-lg'>Hello there, welcome back!</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
