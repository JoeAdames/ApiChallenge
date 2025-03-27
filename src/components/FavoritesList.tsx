import { useState } from "react";
import { useFavoriteStore } from "../store/favoritesStore";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGenerateMatch } from "@/hooks/useGenerateMatch";

export default function FavoritesList() {
  const { favorites, removeFavorite } = useFavoriteStore();
  const [match, setMatch] = useState<string[] | undefined>([]);
  const { mutate, data, isError, error } = useGenerateMatch();

  const handleMutate = () => {
    const mutateIds = favorites.map((dog) => dog.id);
    mutate({ favoriteDogIds: mutateIds });
    setMatch(data?.match);
  };

  if (isError) return <p className="text-red-500">Error loading match: {error?.message}</p>;

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h1 className="text-2xl font-bold text-gray-200">Favorites</h1>
      
      <ScrollArea className="w-80 max-h-[400px] rounded-md border border-gray-300 dark:border-gray-600 mt-4">
        {favorites.length > 0 ? (
          <ul className="space-y-2">
            {favorites.map((dog) => (
              <li key={dog.id} className="border border-gray-300 dark:border-gray-600 p-3 rounded-md flex items-center gap-4 bg-neutral-800 text-white dark:bg-neutral-700">
                <img src={dog.img} alt={dog.name} className="w-12 h-12 object-cover rounded-full" />
                
                <div className="flex flex-col flex-1">
                  <span className="font-semibold">{dog.name}</span>
                  <span className="text-gray-400 text-sm">{dog.breed}</span>
                  <span className="text-gray-300 text-xs">Age: {dog.age}</span>
                </div>

                <Button
                  onClick={() => removeFavorite(dog.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-1 px-2 text-xs rounded-md"
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center p-4">Add some favorites!</p>
        )}

        {favorites.length > 0 && (
          <div className="mt-4 flex flex-col items-center">
            <Button onClick={handleMutate} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Generate Match!
            </Button>

            {favorites.length > 0 && (
              <div className="mt-2 text-sm text-gray-300">
                {match}
              </div>
            )}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}