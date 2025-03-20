import { create } from 'zustand';

type AuthState = {
    user: {name: string; email:string} | null;
    login: (name: string, email: string) =>  void;
    logout: () => void;
 };

 export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: null,
    login: (name, email) => set({user:{ name, email }}),
    logout: () => set({ user: null },) 
 }))