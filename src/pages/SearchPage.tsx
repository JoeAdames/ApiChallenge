import { useFetchDogs } from '../hooks/useFetchDogs';
import { DogResults } from '@/components/DogResults';
import FavoritesList from '@/components/FavoritesList';
import Filters from '@/components/FiltersLayout';
import { useFetchBreeds } from '@/hooks/useFetchBreeds';

export default function Search() {
  const { dogs, isLoading, isError, error } = useFetchDogs();
  useFetchBreeds();  

  if (isLoading) return <p className="text-center text-lg">Loading dogs...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error?.message}</p>;

  return (
    <div className="h-full w-full flex flex-col lg:flex-row justify-center gap-6 p-4 lg:p-6">
      {/* Filters Sidebar (Takes full width on mobile, 1/4 width on large screens) */}
      <div className="w-full lg:w-1/3">
        <Filters />
        <FavoritesList />
      </div>

      {/* Dog Results (Takes full width on mobile, 1/2 width on large screens) */}
      <div className="w-full lg:w-2/3">
        <DogResults dogs={dogs} />
      </div>

    </div>
  );
}