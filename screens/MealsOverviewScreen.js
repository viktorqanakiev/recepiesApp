import { MEALS, CATEGORIES } from "../data/dummy-data";
import { StyleSheet, View, Text, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

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

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return (
      //   <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />

      //with this syntax we can distribute all the props from the object
      <MealItem {...mealItemProps} />
    );
  }

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
