import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import DogResultsProps from "../interfaces/dog/DogResultsProps"
import { useFavoriteStore } from "@/store/favoritesStore";

export function DogResults({ dogs }: DogResultsProps) {
  const { favorites, toggleFavorite } = useFavoriteStore();

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold text-gray-200 mt-4">Results</h1>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <Card key={dog.id} className="bg-neutral-800 text-white dark:bg-neutral-700 shadow-lg rounded-lg">
              <CardHeader className="flex flex-row justify-between p-4 border-b border-gray-700">
                <CardTitle className="text-lg font-semibold">{dog.name}</CardTitle>
                <span className="text-gray-300 text-sm">Age: {dog.age}</span>
              </CardHeader>

              <CardContent className="p-4">
                <img 
                  src={dog.img} 
                  alt={dog.name} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>

              <CardFooter className="flex flex-row justify-between items-center p-4 border-t border-gray-700">
                <span className="text-gray-300">{dog.breed}</span>
                
                <div className="flex items-center">
                  <label className="text-sm mr-2">Favorite</label>
                  <Checkbox
                    checked={favorites.some((favDog) => favDog.id === dog.id)}
                    onCheckedChange={() => toggleFavorite(dog)}
                    className="mx-2"
                  />
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="col-span-3 text-center mt-4 text-gray-500 dark:text-gray-400">
            No dogs found for the selected breed.
          </p>
        )}
      </div>
    </div>
  );
}