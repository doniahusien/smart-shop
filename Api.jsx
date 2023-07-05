import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3004';
export const fetchUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
