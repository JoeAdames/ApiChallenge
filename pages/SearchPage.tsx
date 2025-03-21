import { useState } from 'react';
import { useFetchDogs } from '../hooks/useFetchDogs';
import BreedsList from '../components/BreedsList'
import AgeSelect from '../components/AgeSelect';
import { Button } from '@/components/ui/button';
import { DogResults } from '@/components/DogResults';
import FavoritesList from '@/components/FavoritesList';

export default function Search() {
  //set ages
  const [ageMin, setAgeMin] = useState<number | undefined>(undefined);
  const [ageMax, setAgeMax] = useState<number | undefined>(undefined);

  //set pagination 
  const [from, setFrom] = useState<string | undefined>();
  const [selectedBreed, setSelectedBreed] = useState<string | undefined>();

  //set sorts
  const [selectedSortType, setSelectedSortType] = useState<'breed' | 'age' | 'name'>('breed');
  const [selectedSortOrder, setSelectedSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sort, setSort] = useState<'breed:asc' | 'breed:desc' | 'name:asc' | 'name:desc' | 'age:asc' | 'age:desc'>('breed:asc');
  
  const { dogs, isLoading, isError, error, prev, next } = useFetchDogs({ 
    breeds: selectedBreed ? [selectedBreed] : [], 
    ageMin: ageMin, 
    ageMax, 
    sort, 
    size: 18, 
    from 
  });

  const uniqueAges = Array.from(new Set(dogs.map((dog) => dog.age))).sort((a, b) => a - b);

    const applySort = () => {
      setSort(`${selectedSortType}:${selectedSortOrder}` as typeof sort);
    };

  if (isLoading) return <p>Loading dogs...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="h-full">
      <div className="flex flex-row content-center justify-evenly mt-5 mb-5">
      <BreedsList selectedBreed={selectedBreed} onSelectBreed={setSelectedBreed}/>  
        <AgeSelect selectedAge={ageMin} onSelectAge={setAgeMin} uniqueAges={uniqueAges} name="Minimum Age"/>
        <AgeSelect selectedAge={ageMax} onSelectAge={setAgeMax} uniqueAges={uniqueAges} name="Maximum Age"/>
        <div>
            <label>Sort by:</label>
            <select value={selectedSortType} onChange={(e) => setSelectedSortType(e.target.value as 'breed' | 'age' | 'name')}>
              <option value="breed">Breed</option>
              <option value="age">Age</option>
              <option value="name">Name</option>
            </select>
            </div>
            <div>
            <select value={selectedSortOrder} onChange={(e) => setSelectedSortOrder(e.target.value as 'asc' | 'desc')}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            </div>
            <Button onClick={applySort}>
              Apply
            </Button>
            </div>
      <FavoritesList  />  
      <DogResults dogs={dogs}/>
      <div className="flex flex-row content-center">
      <button onClick={() => setFrom(prev)} disabled={!prev}>Previous</button>
      <button onClick={() => setFrom(next)} disabled={!next}>Next</button>
      </div>
    </div>
  );
}