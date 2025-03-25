import { useState } from 'react';
import { useFetchDogs } from '../hooks/useFetchDogs';
import BreedsList from '../components/BreedsList'
import AgeSelect from '../components/AgeSelect';
import { Button } from '@/components/ui/button';
import { DogResults } from '@/components/DogResults';
import FavoritesList from '@/components/FavoritesList';
import { useFilterStore } from '@/store/filterStore';
import  Filters from '@/components/FiltersLayout';

export default function Search() {
  const { setFilters } = useFilterStore();
  const { dogs, isLoading, isError, error, prev, next } = useFetchDogs();
  const [ tempFilters, setTempFilters ] = useState({
    selectedBreeds: [],
    ageMin: undefined,
    ageMax: undefined,
    sortType: "breed",
    sortOrder: "asc"
  })

  // const uniqueAges = Array.from(new Set(dogs.map((dog) => dog.age))).sort((a, b) => a - b);


  if (isLoading) return <p>Loading dogs...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="h-full flex">
      <BreedsList/>  
      <FavoritesList  />  
      <DogResults dogs={dogs}/>
      <div className="flex flex-row content-center">
      {/* <button onClick={() => setFrom(prev)} disabled={!prev}>Previous</button>
      <button onClick={() => setFrom(next)} disabled={!next}>Next</button> */}
      </div>
    </div>
  );
}