export default interface FilterState {
    breeds: string[];
    ageMin?: number;
    ageMax?: number;
    sortType: "breed" | "age" | "name";
    sortOrder: "asc" | "desc";
    from?: string;
    size: number;

    setFilters: (filters: Partial<FilterState>) => void;
    toggleBreed: (breed: string) => void;
    resetFilters: () => void;
}

