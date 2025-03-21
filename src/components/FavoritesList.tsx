import { useFavoriteStore } from "../store/favoritesStore";
import  { Button } from "@/components/ui/button"

export default function FavoritesList(){
    const {favorites, removeFavorite} = useFavoriteStore();
  return (
    <div className="">
         {favorites ? (
          favorites.map((dog) => (
            <div className="flex flex-row">
                <h1 key={dog.id}>{dog.name}</h1> 
                <Button>
                    <div>Remove</div>
                </Button>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center mt-4">Add Some Favorites!</p>
        )}
    </div>
  );
}