import { useState } from "react";
import { useFavoriteStore } from "../store/favoritesStore";
import  { Button } from "@/components/ui/button"
import { useGenerateMatch } from "@/hooks/useGenerateMatch";

export default function FavoritesList(){
    const {favorites, removeFavorite} = useFavoriteStore();
    const [ match, setMatch ] = useState<string[] |  undefined>();
    const { mutate, data, isError, error } = useGenerateMatch();
    const handleMutate = () => {
     const mutateIds = favorites.map(dog => dog.id);
     mutate({favoriteDogIds: mutateIds});
     setMatch(data?.match)
    }
    if (isError) return <p>Error loading Match: {error?.message}</p>;
  return (
    <div className="">
         {favorites ? (
          favorites.map((dog) => (
            <div className="flex flex-row" key={dog.id}>
                <h1>{dog.name}</h1> 
                <Button onClick={() => removeFavorite(dog.id)} >Remove</Button>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center mt-4">Add Some Favorites!</p>
        )}
        {favorites.length ? (
          <div>
          <Button onClick={handleMutate}>Generate Match!</Button>
          <div>{match}</div>
          </div>
        ) : (
          <p>Add some Favorites!</p>
        )}
    </div>
  );
}