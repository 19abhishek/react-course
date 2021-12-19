import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState();
  // useEffect(() => {
  // const fetchMeals = async () => {

  //     const meals = await fetch(
  //       "https://food-http-c7a09-default-rtdb.firebaseio.com/json"
  //     );
  //     const response = await meals.json();
  //     console.log(response);
  // }

  // )}, []);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-http-c7a09-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const responseData = await response.json();
      const mealData = [];
      for (const key in responseData) {
        mealData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(mealData);
      setLoading(false);
    };
    //try-catch is not used here because fetch meals is an asynch function. You can make another async function and use try-catch in it
    fetchMeals().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return <section className={classes.loading}>Loading...</section>;
  }
  if (hasError) {
    return <section className={classes.error}>Something went wrong.</section>;
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
