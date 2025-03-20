import { useFetchBreeds } from '../hooks/useFetchBreeds';
import BreedListProps from '../interfaces/BreedListProps'

export default function BreedList({ selectedBreed, onSelectBreed }: BreedListProps) {
  const { data: breeds, isLoading, isError, error } = useFetchBreeds();


  if (isLoading) return <p>Loading breeds...</p>;
  if (isError) return <p>Error loading breeds: {error?.message}</p>;

  return (
    <div className="">
      <select 
        onChange={(e) => onSelectBreed(e.target.value)}
        className="p-2 border rounded shadow"
      >
        <option value="">
            {selectedBreed ? `Selected: ${selectedBreed}` : 'Select A Breed' }
        </option>
        {breeds?.map((breed, index) => (
          <option key={index} >
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
}