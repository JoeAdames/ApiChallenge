import { useMutation } from '@tanstack/react-query';
import { generateMatch } from '../api/dogs'; 
import MatchResponse from '@/interfaces/MatchResponse';
import MatchProps from '@/interfaces/MatchProps';

export const useGenerateMatch = () => {
    return useMutation<MatchResponse, Error, MatchProps>({
      mutationFn: generateMatch,
    })
}