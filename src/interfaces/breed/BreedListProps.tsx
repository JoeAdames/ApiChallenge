export default interface BreedListProps {
    selectedBreed: string | undefined;
    onSelectBreed: (breed: string | undefined) => void;
  }