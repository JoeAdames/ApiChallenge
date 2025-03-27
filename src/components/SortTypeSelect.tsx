import DefaultFilterState from '@/interfaces/filters/DefaultFilterState';
import SortProps from '@/interfaces/filters/SortProps';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export default function SortTypeSelect({
  label,
  tempFilters,
  setTempFilters,
}: SortProps & {
  tempFilters: DefaultFilterState;
  setTempFilters: React.Dispatch<React.SetStateAction<DefaultFilterState>>;
}) {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label className="text-sm font-semibold text-gray-300">{label}</label>
      <Select
        value={tempFilters.sortType}
        onValueChange={(value) => setTempFilters((prev) => ({...prev, sortType: value as "breed" | "age" | "name",}))}
      >
        <SelectTrigger className="w-full border border-gray-300 dark:border-gray-600 rounded-md text-gray-300 px-3 py-2">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-neutral-700 border border-gray-300 dark:border-gray-600 rounded-md">
          <SelectItem value="breed" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Breed</SelectItem>
          <SelectItem value="age" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Age</SelectItem>
          <SelectItem value="name" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Name</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
