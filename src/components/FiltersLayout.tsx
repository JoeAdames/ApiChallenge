import { useState } from "react";
import AgeMinSlider from "./AgeMinSlider"
import BreedList from "./BreedsList"
import { useFilterStore } from '@/store/filterStore';
import DefaultFilterState from "@/interfaces/filters/DefaultFilterState";
import { Button } from "./ui/button";
import SortTypeSelect from "./SortTypeSelect";
import SortBySelect from "./SortBySelect";
import AgeMaxSlider from "./AgeMaxSlider";


export default function Filters() {
    const { setFilters } = useFilterStore();

    const  [userFilters, setUserFilters] = useState<DefaultFilterState>({
        breeds: [],
        ageMin: undefined,
        ageMax: undefined,
        sortType: "breed",
        sortOrder: "asc",
    });

    const applyFilters = () => {
        setFilters(userFilters);
      };

    return (
        <div className="flex flex-col">
            <BreedList
            tempFilters={userFilters} 
            setTempFilters={setUserFilters} 
            />
            <AgeMinSlider
            name={'Minimum Age'} 
            ageMax={14} DV={0} 
            tempFilters={userFilters} 
            setTempFilters={setUserFilters} 
            currentAge={userFilters.ageMin}
            />
            <AgeMaxSlider
            name={'Maximum Age'} 
            ageMax={14} DV={14} 
            tempFilters={userFilters} 
            setTempFilters={setUserFilters} 
            currentAge={userFilters.ageMax}
            />
            <div className="flex flex-row justify-evenly mb-4">
            <SortTypeSelect
            label={'Sort Type:'}
            tempFilters={userFilters} 
            setTempFilters={setUserFilters} 
            />
            <SortBySelect
            label={'Sort by:'}
            tempFilters={userFilters} 
            setTempFilters={setUserFilters}
            />
            </div>
            <Button onClick={applyFilters} className="ml-2 p-2 bg-blue-500 text-white rounded">
                Apply Filters
            </Button>
        </div>

    )
}