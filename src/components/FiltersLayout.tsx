import { useState } from "react";
import AgeSelect from "./AgeSelect"
import BreedList from "./BreedsList"
import { useFilterStore } from '@/store/filterStore';
import DefaultFilterState from "@/interfaces/filters/DefaultFilterState";
import { Button } from "./ui/button";


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
            <AgeSelect 
            name={'Minimum Age'} 
            ageMax={14} DV={0} 
            tempFilters={userFilters} 
            setTempFilters={setUserFilters} 
            currentAge={userFilters.ageMin}
            />
            <AgeSelect 
            name={'Maximum Age'} 
            ageMax={14} DV={0} 
            tempFilters={userFilters} 
            setTempFilters={setUserFilters} 
            currentAge={userFilters.ageMax}
            />
            <Button onClick={applyFilters} className="ml-2 p-2 bg-blue-500 text-white rounded">
                Apply Filters
            </Button>
        </div>

    )
}