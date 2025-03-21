import DogResponse from "./DogResponse";

export default interface FavoriteStore {
  favorites: DogResponse[];
  addFavorite: (dog: DogResponse) => void;
  removeFavorite: (id: string) => string;
  toggleFavorite: (dog: DogResponse) => void;
}