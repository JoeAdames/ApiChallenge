import { useFetchBreeds } from '../hooks/useFetchBreeds';
import BreedListProps from '../interfaces/breed/BreedListProps'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function BreedList({ selectedBreed, onSelectBreed}: BreedListProps) {
  const { data: data, isLoading, isError, error } = useFetchBreeds();

  if (isLoading) return <p>Loading breeds...</p>;
  if (isError) return <p>Error loading breeds: {error?.message}</p>;
  if (data == null) return <div>No Breeds Found</div>
  console.log(data)


  return (
    <div className="">
      <Select onValueChange={(e) => onSelectBreed(e)}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={selectedBreed ? selectedBreed : "Select Breed"}/>
        </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((breed: string, index: number) => (
            <SelectItem key={index} value={breed}>
              {breed}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
      </Select>
    </div>
  );
}