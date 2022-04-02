import classes from "./MealsSummary.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Tasty Japanese  Sushi ",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A Israel specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Angus Stake",
    description: "Australian, beef meat",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Fatoosh",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
