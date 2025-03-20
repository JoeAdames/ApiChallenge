import  apiClient  from './axiosInstance'
import LoginResponse from '../interfaces/LoginResponse'

export const loginUser = async (name: string, email: string): Promise<LoginResponse | null> => {
     const response = await apiClient.post<LoginResponse>(`/auth/login`, { name, email });
    return response.data;
};
