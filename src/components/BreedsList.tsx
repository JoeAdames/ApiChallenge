import { Checkbox } from './ui/checkbox';

import DefaultFilterState from '@/interfaces/filters/DefaultFilterState';
import { ScrollArea } from './ui/scroll-area';
import { useBreedStore } from '@/store/breedStore';

export default function BreedList({tempFilters, setTempFilters}: & {
    tempFilters: DefaultFilterState, 
    setTempFilters: React.Dispatch<React.SetStateAction<DefaultFilterState>>
  }) {

    const { breeds } = useBreedStore();

    const handleBreedToggle = (breed: string, checked: boolean) => {
      if (checked) {
        setTempFilters({
          ...tempFilters,
          breeds: [...tempFilters.breeds, breed],
        });
      } else {
        setTempFilters({
          ...tempFilters,
          breeds: tempFilters.breeds.filter(b => b !== breed),
        });
      }
    };

  return (

    <div>
      <h1 className="text-2xl">Breeds</h1>
      <ScrollArea className="h-100 rounded-md border mt-2  w-full">
      <ul>
          {breeds.map((breed, index) => (
            <li key={index} className="list-none p-2">
              <Checkbox
              onCheckedChange={(checked) => handleBreedToggle(breed, Boolean(checked))}
              className="mx-2"
              />
              <label>{breed}</label>
            </li>
          ))}
      </ul>
      </ScrollArea>
    </div>
  );
}