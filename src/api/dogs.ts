import  apiClient  from './axiosInstance'
import DogSearchResponse from '../interfaces/dog/DogSearchResponse'
import FetchDogsProps from '../interfaces/dog/FetchDogsProps'
import DogResponse from '../interfaces/dog/DogResponse';
import BreedResponse from '../interfaces/breed/BreedResponse';
import MatchResponse from '@/interfaces/match/MatchResponse';
import MatchProps from '@/interfaces/match/MatchProps';

export const fetchDogIds= async (params: FetchDogsProps): Promise< DogSearchResponse > => {
    const response = await apiClient.get< DogSearchResponse >(`/dogs/search`, { params });
    if(response.data) {
        return response.data
    }   
    return {resultIds: [], total: 0};
};

export const fetchDogsByIds = async (params: DogSearchResponse): Promise< DogResponse[] > => {
    const dogIds = params.resultIds;
      const response = await apiClient.post< DogResponse []>(`/dogs`, dogIds );
      return response.data ?? []
}

export const fetchBreeds = async (): Promise< BreedResponse > => {
    const response = await apiClient.get< BreedResponse >('/dogs/breeds');
    return response.data;
}

//matchdogsbyid method  
export const generateMatch = async (params: MatchProps): Promise< MatchResponse > => {
    const response = await apiClient.post< MatchResponse >('/dogs/match', params.favoriteDogIds);
    return response.data;
}

//getlocations
