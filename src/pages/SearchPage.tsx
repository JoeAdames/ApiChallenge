import { useState } from 'react';
import { useFetchDogs } from '../hooks/useFetchDogs';
import BreedsList from '../components/BreedsList'



export default function Search() {
  const [ageMin, setAgeMin] = useState<number | undefined>();
  const [ageMax, setAgeMax] = useState<number | undefined>();
  const [from, setFrom] = useState<string | undefined>();
  const [selectedBreed, setSelectedBreed] = useState<string | undefined>();
  const [selectedSortType, setSelectedSortType] = useState<'breed' | 'age' | 'name'>('breed');
  const [selectedSortOrder, setSelectedSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sort, setSort] = useState<'breed:asc' | 'breed:desc' | 'name:asc' | 'name:desc' | 'age:asc' | 'age:desc'>('breed:asc');
  
  const { dogs, isLoading, isError, error, prev, next } = useFetchDogs({ 
    breeds: selectedBreed ? [selectedBreed] : [], 
    ageMin, 
    ageMax, 
    sort, 
    size: 100, 
    from 
  });

    const applySort = () => {
      setSort(`${selectedSortType}:${selectedSortOrder}` as typeof sort);
    };

  if (isLoading) return <p>Loading dogs...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="grid">
      <BreedsList selectedBreed={selectedBreed} onSelectBreed={setSelectedBreed}/>  

      <input type="number" placeholder="Min Age" onChange={(e) => setAgeMin(Number(e.target.value))} />
      <input type="number" placeholder="Max Age" onChange={(e) => setAgeMax(Number(e.target.value))} />

      <div className="mt-4">
        <label>Sort by:</label>
        <select value={selectedSortType} onChange={(e) => setSelectedSortType(e.target.value as 'breed' | 'age' | 'name')}>
          <option value="breed">Breed</option>
          <option value="age">Age</option>
          <option value="name">Name</option>
        </select>

        <select value={selectedSortOrder} onChange={(e) => setSelectedSortOrder(e.target.value as 'asc' | 'desc')}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <button onClick={applySort} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Apply Sort
        </button>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <div key={dog.id} className="p-4 border rounded shadow">
              <img src={dog.img} alt={dog.name} className="w-full h-40 object-cover rounded" />
              <h3 className="font-bold">{dog.name}</h3>
              <p>Breed: {dog.breed}</p>
              <p>Age: {dog.age}</p>
              <p>Location: {dog.zip_code}</p>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center mt-4">No dogs found for the selected breed.</p>
        )}
      </div>

      {/* Pagination */}
      <button onClick={() => setFrom(prev)} disabled={!prev}>Previous</button>
      <button onClick={() => setFrom(next)} disabled={!next}>Next</button>
    </div>
  );
}