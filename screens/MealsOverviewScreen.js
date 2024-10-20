import MealList from "../components/MealList/MealList";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import {useLayoutEffect } from "react";

// every componenty which is registered as a screen gets a route prop, explained in 99
function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  // when we change the screens between the animation, the title is change, it has the same usage as useEffect.
  //Just in this case is more proper to use this method

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    //explained in 103
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealList items={displayedMeals}/>
}
export default MealsOverviewScreen;

