export default interface DefaultFilterState {
    breeds: string[];
    ageMin?: number;
    ageMax?: number;
    sortType: "breed" | "age" | "name";
    sortOrder: "asc" | "desc";
}