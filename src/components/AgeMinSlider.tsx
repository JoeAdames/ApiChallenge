import { Slider } from '@/components/ui/slider';
import AgeProps from '@/interfaces/age/AgeProps';
import DefaultFilterState from '@/interfaces/filters/DefaultFilterState';

export default function AgeMinSlider({name, ageMax, DV, tempFilters, setTempFilters, currentAge}: AgeProps &
   {
    tempFilters: DefaultFilterState, 
    setTempFilters: React.Dispatch<React.SetStateAction<DefaultFilterState>>
  }) {

  return (
    <div className="m-2 p-2 w-full">
      <label className="block text-sm font-semibold text-gray-300 mb-1">{name}</label>
      <div className="flex items-center gap-3">
      <Slider 
      onValueChange={(val) => setTempFilters({ ...tempFilters, ageMin: val[0] })}
       min={0}
       max={ageMax}
       step={1} 
       defaultValue={[DV]}  
       className="text-neutral-200" />
      <div className="text-sm font-medium text-gray-200">
        {currentAge ??  0}
        </div>
      </div>
    </div>
  );
}