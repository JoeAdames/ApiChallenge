import { useMutation } from '@tanstack/react-query';
import { generateMatch } from '../api/dogs'; 
import MatchResponse from '@/interfaces/match/MatchResponse';
import MatchProps from '../interfaces/match/MatchProps';

export const useGenerateMatch = () => {
    return useMutation<MatchResponse, Error, MatchProps>({
      mutationFn: generateMatch,
    })
}