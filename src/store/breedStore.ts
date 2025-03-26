import BreedStore from '@/interfaces/breeds/BreedsStore';
import { create } from 'zustand';


export const useBreedStore = create<BreedStore>((set) => ({
    breeds: [],
    setBreeds: (breeds) => set({breeds}),
  }));