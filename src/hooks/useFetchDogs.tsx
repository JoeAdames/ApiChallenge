import { useQuery } from '@tanstack/react-query';
import { fetchDogIds, fetchDogsByIds } from '../api/dogs';
import DogSearchResponse from '../interfaces/dog/DogSearchResponse';
import DogResponse from '../interfaces/dog/DogResponse';
import FetchDogsProps from '../interfaces/dog/FetchDogsProps';

export const useFetchDogs = (params: FetchDogsProps) => {
  const { 
    data: dogIdData, 
    isLoading: isDogIdLoading, 
    isError: isDogIdError, 
    error: dogIdError 
  } = useQuery<DogSearchResponse>({
    queryKey: ['dogIds', params],
    queryFn: () => fetchDogIds(params),
    placeholderData: { resultIds: [], total: 0 },
  });

  const dogIds = dogIdData?.resultIds ?? [];

  const { 
    data: dogObjects, 
    isLoading: isDogsLoading, 
    isError: isDogsError, 
    error: dogsError 
  } = useQuery<DogResponse[]>({
      queryKey: ['dogs', dogIds], 
      queryFn: async () => {
        if (dogIds.length === 0) return [];
        return await fetchDogsByIds(dogIdData!);
      },
      enabled: dogIds.length > 0,
    });

  return {
    dogs: dogObjects ?? [],
    isLoading: isDogIdLoading || isDogsLoading,
    isError: isDogIdError || isDogsError,
    error: dogIdError || dogsError,
    total: dogIdData?.total || 0,
    next: dogIdData?.next, //throws errors
    prev: dogIdData?.prev, // throws errors
  };
};