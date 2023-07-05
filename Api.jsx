import axios from 'axios';

// Set the base URL for the fake API
axios.defaults.baseURL = 'http://localhost:3004';

// Fetch users from the API
export const fetchUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};