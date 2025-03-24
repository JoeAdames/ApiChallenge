import { useQuery } from '@tanstack/react-query';
import { fetchBreeds } from '../api/dogs'; 

export const useFetchBreeds = () => {
    const { data, isLoading, isError, error } = useQuery<string[]>({
        queryKey: ['breeds'],
        queryFn: async () => {return await fetchBreeds()},
      });
      return { 
        data, isLoading, isError, error
      };
}