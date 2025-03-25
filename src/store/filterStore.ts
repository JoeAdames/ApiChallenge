import { create } from 'zustand';
import FilterState from '@/interfaces/filters/FilterState';

export const useFilterStore = create<FilterState>((set) => ({
    selectedBreeds: [],
    ageMin: undefined,
    ageMax: undefined,
    sortType: "breed",
    sortOrder: "asc",
    from: undefined,
    size: 18,

    setFilters: (filters) => set((state) => ({ ...state, ...filters})),
    toggleBreed: (breed) =>
      set((state) => ({
        selectedBreeds: state.selectedBreeds.includes(breed)
        ? state.selectedBreeds.filter((b) => b !== breed)
        : [...state.selectedBreeds, breed],
      }
    )),
    resetFilters: ()  => set({
        selectedBreeds: [],
        ageMin: undefined,
        ageMax: undefined,
        sortType: "breed",
        sortOrder: "asc",
        from: undefined,
        size: 18,
    })

}))