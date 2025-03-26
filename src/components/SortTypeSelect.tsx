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
    <div className='m-1'>
        <label>{label}</label>
        <Select value={tempFilters.sortType} onValueChange={(e) => setTempFilters((prev) => ({ ...prev, sortType: e as "breed" | "age" | "name" }))}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={label} className='text-neutral-200'/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="breed">Breed</SelectItem>
            <SelectItem value="age">Age</SelectItem>
            <SelectItem value="name">Name</SelectItem>
        </SelectContent>
        </Select>
    </div>
  );
}