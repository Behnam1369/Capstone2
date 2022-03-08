const getMeals = () => {
  const meals = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese')
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => `failed.${error}`);

  return meals;
};
export default getMeals;