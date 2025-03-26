import { Slider } from '@/components/ui/slider';
import AgeProps from '@/interfaces/age/AgeProps';
import DefaultFilterState from '@/interfaces/filters/DefaultFilterState';

export default function AgeMaxSlider({name, ageMax, DV, tempFilters, setTempFilters, currentAge}: AgeProps &
   {
    tempFilters: DefaultFilterState, 
    setTempFilters: React.Dispatch<React.SetStateAction<DefaultFilterState>>
  }) {

  return (
    <div className='m-2 p-1'>
      <label>{name}</label>
      <div className=" flex flex-row items-center">
      <Slider onValueChange={(val) =>
          setTempFilters({ ...tempFilters, ageMax: val[0] })
        } min={0} max={ageMax} step={1} defaultValue={[DV]} className="text-neutral-200" />
      <div className="ml-1">{currentAge ??  DV}</div>
      </div>
    </div>
  );
}