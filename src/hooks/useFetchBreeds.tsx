import { useQuery } from '@tanstack/react-query';
import { fetchBreeds } from '../api/dogs'; 
import BreedResponse from '../interfaces/breed/BreedResponse';

export const useFetchBreeds = () => {
    const { data, isLoading, isError, error } = useQuery<BreedResponse>({
        queryKey: ['breeds'],
        queryFn: fetchBreeds,
        staleTime: 5 * 60 * 1000,
        retry: 2,
      });
      return { 
        data, isLoading, isError, error
      };
}