import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

function FavoritesScreen() {
  const favoriteMealCtx = useContext(FavouritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;
