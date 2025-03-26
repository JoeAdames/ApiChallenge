import { create } from 'zustand';
import FilterState from '@/interfaces/filters/FilterState';

export const useFilterStore = create<FilterState>((set) => ({
    breeds: [],
    ageMin: undefined,
    ageMax: undefined,
    sortType: "breed",
    sortOrder: "asc",
    from: undefined,
    size: 18,

    setFilters: (filters) => set((state) => ({ ...state, ...filters})),
    toggleBreed: (breed) =>
      set((state) => ({
        breeds: state.breeds.includes(breed)
        ? state.breeds.filter((b) => b !== breed)
        : [...state.breeds, breed],
      }
    )),
    resetFilters: ()  => set({
        breeds: [],
        ageMin: undefined,
        ageMax: undefined,
        sortType: "breed",
        sortOrder: "asc",
        from: undefined,
        size: 18,
    })

}))