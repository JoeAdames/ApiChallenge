
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import DogResultsProps from "../interfaces/DogResultsProps"
import { useFavoriteStore } from "@/store/favoritesStore";

export function DogResults({dogs}: DogResultsProps) {
  const { favorites, toggleFavorite } = useFavoriteStore();
  
  return ( 
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 h-full text-center">
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <Card key={dog.id} className="bg-neutral-700 text-neutral-200" > 
                <CardContent>
                    <CardHeader>
                            <CardTitle>{dog.name}</CardTitle>
                    </CardHeader>
                    <img src={dog.img} alt={dog.name} className="w-full h-40 object-center rounded" />
                    <CardDescription className="my-2">
                        <p>Age: {dog.age}</p>
                        <p>Location: {dog.zip_code}</p>
                    </CardDescription>
                    <CardHeader>
                        <CardTitle> {dog.breed}</CardTitle>
                    </CardHeader>
                    <Checkbox
                    checked={favorites.some((favDog) => favDog.id === dog.id)}
                    onCheckedChange={() => toggleFavorite(dog)}
                    className="mx-2"
                    />
                    <label>Favorite</label>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="col-span-3 text-center mt-4">No dogs found for the selected breed.</p>
        )}
      </div>



    // <Card className="w-[350px]">
    //   <CardHeader>
    //     <CardTitle>Create project</CardTitle>
    //     <CardDescription>Deploy your new project in one-click.</CardDescription>
    //   </CardHeader>
    //   <CardContent>
            
    //   </CardContent>
    //   <CardFooter className="flex justify-between">
    //     <Button variant="outline">Cancel</Button>
    //     <Button>Deploy</Button>
    //   </CardFooter>
    // </Card>
  )}
