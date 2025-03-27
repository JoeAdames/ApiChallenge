import { useState } from "react";
import AgeMinSlider from "./AgeMinSlider";
import BreedList from "./BreedsList";
import { useFilterStore } from '@/store/filterStore';
import DefaultFilterState from "@/interfaces/filters/DefaultFilterState";
import { Button } from "./ui/button";
import SortTypeSelect from "./SortTypeSelect";
import SortBySelect from "./SortBySelect";
import AgeMaxSlider from "./AgeMaxSlider";

export default function Filters() {
    const { setFilters } = useFilterStore();

    const [userFilters, setUserFilters] = useState<DefaultFilterState>({
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
        <div className="flex flex-col gap-6 w-full max-w-lg mx-auto p-4 md:p- shadow-lg rounded-lg">
            {/* Breed List */}
            <BreedList tempFilters={userFilters} setTempFilters={setUserFilters} />

            {/* Sliders */}
            <div className="flex flex-col md:flex-row gap-4">
                <AgeMinSlider
                    name="Minimum Age"
                    ageMax={14}
                    DV={0}
                    tempFilters={userFilters}
                    setTempFilters={setUserFilters}
                    currentAge={userFilters.ageMin}
                />
                <AgeMaxSlider
                    name="Maximum Age"
                    ageMax={14}
                    DV={14}
                    tempFilters={userFilters}
                    setTempFilters={setUserFilters}
                    currentAge={userFilters.ageMax}
                />
            </div>

            {/* Sorting Options */}
            <div className="flex flex-col justify-between items-center gap-4">
                <SortTypeSelect label="Sort Type:" tempFilters={userFilters} setTempFilters={setUserFilters} />
                <SortBySelect label="Sort by:" tempFilters={userFilters} setTempFilters={setUserFilters} />
            </div>

            {/* Apply Filters Button */}
            <Button
                onClick={applyFilters}
                className="w-full py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-md transition duration-200"
            >
                Apply Filters
            </Button>
        </div>
    );
}
