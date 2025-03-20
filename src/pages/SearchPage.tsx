import { useState } from 'react';
import { useFetchDogs } from '../hooks/useFetchDogs';

export default function Search() {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [ageMin, setAgeMin] = useState<number | undefined>();
  const [ageMax, setAgeMax] = useState<number | undefined>();
  const [sort, setSort] = useState<'breed:asc' | 'breed:desc' | 'name:asc' | 'name:desc' | 'age:asc' | 'age:desc'>('breed:asc');
  const [from, setFrom] = useState<string | undefined>();
  
  const { dogs, isLoading, isError, error, total, prev, next } = useFetchDogs({ breeds, ageMin, ageMax, sort, size: 10, from });

  if (isLoading) return <p>Loading dogs...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div>
      <h2>Dog Search</h2>

      {/* Filters */}
      <input type="text" placeholder="Breed" onChange={(e) => setBreeds([e.target.value])} />
      <input type="number" placeholder="Min Age" onChange={(e) => setAgeMin(Number(e.target.value))} />
      <input type="number" placeholder="Max Age" onChange={(e) => setAgeMax(Number(e.target.value))} />

      <button onClick={() => setSort(sort === 'breed:asc' ? 'breed:desc' : 'breed:asc')}>
        Sort: {sort}
      </button>

      <div>
      <h2>Dog Search</h2>
      <p>Total Dogs Found: {total}</p>

      {dogs?.length ? (
        <ul>
          {dogs.map((dog) => (
            <li key={dog.id}>{dog.name} - {dog.breed}</li>
          ))}
        </ul>
      ) : (
        <p>No dogs found.</p>
      )}
    </div>

      {/* Pagination */}
      <button onClick={() => setFrom(prev)} disabled={!prev}>Previous</button>
      <button onClick={() => setFrom(next)} disabled={!next}>Next</button>
    </div>
  );
}