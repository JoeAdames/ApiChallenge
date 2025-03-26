import { useQuery } from '@tanstack/react-query';
import { fetchBreeds } from '../api/dogs'; 
import { useEffect } from 'react';
import { useBreedStore } from '@/store/breedStore';

export const useFetchBreeds = () => {
    const { setBreeds} = useBreedStore();
    const { data, isLoading, isError, error } = useQuery<string[]>({
        queryKey: ['breeds'],
        queryFn: async () => {return await fetchBreeds()},
      });
      useEffect(() => {
        if(data){
          setBreeds(data);
        }
      }, [data, setBreeds]);
      return { 
        data, isLoading, isError, error
      };
}