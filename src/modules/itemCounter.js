const mealsApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese';
const counter = async () => {
  const res = await fetch(mealsApi);
  const json = await res.json();
  return json;
};

export default counter;
