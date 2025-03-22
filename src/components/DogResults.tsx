
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import DogResultsProps from "../interfaces/dog/DogResultsProps"
import { useFavoriteStore } from "@/store/favoritesStore";

export function DogResults({dogs}: DogResultsProps) {
  const { favorites, toggleFavorite } = useFavoriteStore();
  
  return ( 
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 h-full text-center">
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <Card key={dog.id} className="bg-neutral-700 text-neutral-200" > 
                <CardHeader className="flex flex-row justify-between">
                        <CardTitle>{dog.name}</CardTitle>
                        <CardTitle className="text-neutral-200">Age: {dog.age}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid ">
                    <img src={dog.img} alt={dog.name} className="w-full h-40 object-center rounded-2xl" />
                    <CardDescription className="my-2">
                    </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-row justify-between">
                        <CardTitle> {dog.breed}</CardTitle>
                        <div>
                    <label>Favorite</label>
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
          <p className="col-span-3 text-center mt-4">No dogs found for the selected breed.</p>
        )}
      </div>
  )}
