const API_URL = 'http://localhost:8000'; // Your DRF API URL

// Function to log in the user
export const loginUser = async (formData) => {
	const { email, password } = formData;
	try {
		const response = await fetch(`${API_URL}/bookings/api/token/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include', // Important for handling cookies
			body: JSON.stringify({ email, password }),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.detail || 'Login failed');
		}

		const data = await response.json();
		return {
			user: data.user,
			refreshToken: data.refresh,
			accessToken: data.access,
		};
	} catch (error) {
		console.error('Error logging in:', error);
		throw error;
	}
};

// Function to log out the user
export const logoutUser = async () => {
	try {
		const response = await fetch(`${API_URL}/bookings/api/logout/`, {
			method: 'POST',
			credentials: 'include',
		});

		if (!response.ok) {
			const errorData = await response.text();
			throw new Error('Logout failed: ' + errorData);
		}
	} catch (error) {
		console.error('Error logging out:', error);
		throw error;
	}
};

// Function to register a new user
export const registerUser = async (userData) => {
	try {
		const response = await fetch(`${API_URL}/bookings/users/register/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.detail || 'Registration failed');
		}

		const data = await response.json();
		return {
			user: data.user,
			refreshToken: data.refresh,
			accessToken: data.access,
		};
	} catch (error) {
		console.error('Error registering user:', error);
		throw error;
	}
};

// Function to create an appointment
export const createAppointment = async (appointmentData) => {
	try {
		const response = await fetch(`${API_URL}/bookings/booking/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include', // Important for handling cookies
			body: JSON.stringify(appointmentData),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.detail || 'Failed to create appointment');
		}

		const data = await response.json();
		return data; // This should contain your success message or created appointment details
	} catch (error) {
		console.error('Error creating appointment:', error);
		throw error;
	}
};
