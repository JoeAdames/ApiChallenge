import { useFilterStore } from '@/store/filterStore';
import { useFetchBreeds } from '../hooks/useFetchBreeds';
import { Checkbox } from './ui/checkbox';

export default function BreedList() {
  const { toggleBreed } = useFilterStore();
  const { data: data, isLoading, isError, error } = useFetchBreeds();


  if (isLoading) return <p>Loading breeds...</p>;
  if (isError) return <p>Error loading breeds: {error?.message}</p>;
  if (data == null) return <div>No Breeds Found</div>

  return (
    <div className="">
      <h1 className="text-2xl">Breeds</h1>
    <ul>
          {data.map((breed: string, index: number) => (
            <li key={index} className="flex flex-row list-none p-1">
              <Checkbox
              onCheckedChange={() => toggleBreed(breed)}
              className="mx-2"
              />
              <label>{breed}</label>
            </li>
          ))}
      </ul>
    </div>
  );
}