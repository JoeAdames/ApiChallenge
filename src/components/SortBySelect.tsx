
import DefaultFilterState from '@/interfaces/filters/DefaultFilterState';
import SortProps from '@/interfaces/filters/SortProps';
import {  Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select';

export default function SortTypeSelect({label, tempFilters, setTempFilters}: SortProps &
   {
    tempFilters: DefaultFilterState, 
    setTempFilters: React.Dispatch<React.SetStateAction<DefaultFilterState>>
  }) {

  return (
    <div className="flex flex-col space-y-1 w-full">
        <label className="text-sm font-semibold text-gray-300">{label}</label>
        <Select value={tempFilters.sortOrder} onValueChange={(e) => setTempFilters((prev) => ({ ...prev, sortOrder: e as "asc" | "desc" }))}>
        <SelectTrigger className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2">
            <SelectValue placeholder={label}/>
        </SelectTrigger>
        <SelectContent className="border border-gray-300 dark:border-gray-600 rounded-md">
            <SelectItem value="asc" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Ascending</SelectItem>
            <SelectItem value="desc" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Descending</SelectItem>
        </SelectContent>
        </Select>
    </div>
  );
}