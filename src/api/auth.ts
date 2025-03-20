import  apiClient  from './axiosInstance'
import LoginResponse from '../interfaces/LoginResponse'




export const loginUser = async (name: string, email: string): Promise<LoginResponse | null> => {
     const response = await apiClient.post<LoginResponse>(`/auth/login`, { name, email });
    return response.data;
  // try {
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     // Handle Axios-specific errors
  //     console.error('Login failed:', error.response?.data?.message || error.message);
  //     alert(`Login failed: ${error.response?.data?.message || 'Please try again later.'}`);
  //   } else {
  //     // Handle generic errors
  //     console.error('Unexpected error:', error);
  //     alert('An unexpected error occurred. Please try again.');
  //   }
  //   return null; 
  // }
};
