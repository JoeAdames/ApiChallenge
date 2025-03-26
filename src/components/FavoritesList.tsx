import { useState } from "react";
import { useFavoriteStore } from "../store/favoritesStore";
import  { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area";
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
    <div className="flex flex-col">
      <h1 className="text-2xl">Favorites</h1>
      <ScrollArea className="h-100 w-72 rounded-md border mt-2">
      {favorites ? (
          favorites.map((dog) => (
            <li key={dog.id} className="border list-none m-2 rounded">
              <div className="flex flex-row justify-evenly items-center p-2">
                <img src={dog.img} alt={dog.name} className="w-10 h-10 object-center rounded-2xl"/>
                <div>
                <div className="">{dog.name}</div>
                <div className="">{dog.breed}</div>
                </div>
                <div className="">{dog.age}</div>
                <Button onClick={() => removeFavorite(dog.id)} className="cursor-pointer">X</Button>
              </div>
            </li>
          ))
        ) : (
          <p className="col-span-3 text-center mt-4">Add Some Favorites!</p>
        )}
        {favorites.length ? (
          <div className="place-self-center place-content-end">
          <Button onClick={handleMutate}>Generate Match!</Button>
          <div>{match}</div>
          </div>
        ) : (
          <p className="place-self-center mt-2">Add some Favorites!</p>
        )}
      </ScrollArea>
    </div>
  );
}