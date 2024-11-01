import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Sign from './pages/Sign';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Appointment from './pages/Appointment';

function App() {
	return (
		<Router>
			<div className=''>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/sign' element={<Sign />} />
					<Route path='/services' element={<Services />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/appointment' element={<Appointment/>} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
