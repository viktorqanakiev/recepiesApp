import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favoriteMealId, setFavouriteMealId] = useState([]);

  function addFavorite(id) {
    setFavouriteMealId((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavouriteMealId((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealId,
    addFavorites: addFavorite,
    removeFavorites: removeFavorite
  }
  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}

export default FavouritesContextProvider;
