import { useFetchDogs } from '../hooks/useFetchDogs';
import { DogResults } from '@/components/DogResults';
import FavoritesList from '@/components/FavoritesList';
import  Filters from '@/components/FiltersLayout';
import { useFetchBreeds } from '@/hooks/useFetchBreeds';

export default function Search() {
  const { dogs, isLoading, isError, error} = useFetchDogs();
  useFetchBreeds();  

  if (isLoading) return <p>Loading dogs...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="h-full w-full flex justify-evenly ">
      <Filters />
      <DogResults dogs={dogs}/>
      <FavoritesList  />  
    </div>
  );
}