import { create } from 'zustand';
import AuthState from '@/interfaces/AuthState';

 export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: null,
    login: (name, email) => set({user:{ name, email }}),
    logout: () => set({ user: null },) 
 }))