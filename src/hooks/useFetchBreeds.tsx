import { useQuery } from '@tanstack/react-query';
import { fetchBreeds } from '../api/dogs'; 
import { BreedResponse } from '../interfaces/breed/BreedResponse';

export const useFetchBreeds = () => {
    const {
        data: dogBreeds,
        isLoading: isdogBreedsLoading, 
        isError: isdogBreedsError, 
        error: dogBreedsError 
    } = useQuery<BreedResponse[]>({
        queryKey: ['dogBreeds'],
        queryFn: fetchBreeds,
        placeholderData: [],
        staleTime: 5 * 60 * 1000,
        retry: 2,
      });
      return {
        data: dogBreeds,
        isLoading: isdogBreedsLoading, 
        isError: isdogBreedsError, 
        error: dogBreedsError 
      };
}