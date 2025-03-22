import  apiClient  from './axiosInstance'
import DogSearchResponse from '../interfaces/DogSearchResponse'
import FetchDogsProps from '../interfaces/FetchDogsProps'
import DogResponse from '../interfaces/DogResponse';
import BreedResponse from '../interfaces/BreedResponse';
import MatchResponse from '@/interfaces/MatchResponse';
import MatchProps from '@/interfaces/MatchProps';

export const fetchDogIds= async (params: FetchDogsProps): Promise<DogSearchResponse> => {
    const response = await apiClient.get<DogSearchResponse>(`/dogs/search`, { params });
    if(response.data) {
        return response.data
    }   
    return {resultIds: [], total: 0};
};

export const fetchDogsByIds = async (params: DogSearchResponse): Promise< DogResponse[] > => {
    const dogIds = params.resultIds;
      const response = await apiClient.post<DogResponse[]>(`/dogs`, dogIds );
      return response.data ?? []
}

export const fetchBreeds = async (): Promise< BreedResponse[] > => {
    const response = await apiClient.get('/dogs/breeds');
    return response.data;
}

//matchdogsbyid method  
export const generateMatch = async (params: MatchProps): Promise< MatchResponse > => {
    const response = await apiClient.post< MatchResponse >('/dogs/match', params.favorites);
    return response.data;
}

//getlocations
