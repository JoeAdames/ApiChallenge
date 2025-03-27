import { Checkbox } from './ui/checkbox';
import DefaultFilterState from '@/interfaces/filters/DefaultFilterState';
import { ScrollArea } from './ui/scroll-area';
import { useBreedStore } from '@/store/breedStore';

export default function BreedList({
  tempFilters,
  setTempFilters,
}: {
  tempFilters: DefaultFilterState;
  setTempFilters: React.Dispatch<React.SetStateAction<DefaultFilterState>>;
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
        breeds: tempFilters.breeds.filter((b) => b !== breed),
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 md:p-6 shadow-md rounded-md">
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold text-white mb-4">
        Breeds
      </h1>

      {/* Scrollable List */}
      <ScrollArea className="h-64 md:h-72 lg:h-80 w-full border border-gray-300 dark:border-gray-700 rounded-md p-2">
        <ul className="space-y-2">
          {breeds.map((breed, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 p-2 rounded-md"
            >
              <Checkbox
                onCheckedChange={(checked) =>
                  handleBreedToggle(breed, Boolean(checked))
                }
                className="w-5 h-5"
              />
              <label className="text-white text-sm md:text-base">
                {breed}
              </label>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
