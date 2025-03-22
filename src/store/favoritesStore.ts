import { create } from 'zustand';
import FavoriteStore from '../interfaces/favorites/FavotiresStore';

export const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: [],

    addFavorite: (dog) =>
      set((state) => ({ favorites: [...state.favorites, dog] })),
  
    removeFavorite: (id) =>
      set((state) => ({ favorites: state.favorites.filter((favDog) => favDog.id !== id) })),
  
    toggleFavorite: (dog) =>
      set((state) =>
        state.favorites.some((favDog) => favDog.id === dog.id)
          ? { favorites: state.favorites.filter((favDog) => favDog.id !== dog.id) }
          : { favorites: [...state.favorites, dog] }
      ),
  }));