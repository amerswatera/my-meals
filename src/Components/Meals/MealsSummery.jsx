import classes from "./MealsSummary.module.css";

const MealSummery = () => {
  return (
    <section className={classes.summary}>
      <h2 className={classes.summary}>Elegance, refinement and authenticity</h2>
      <p>
        Our food is prepared with the freshest of products, and thus the menu
        changes according to the seasons and, of course, the creative
        imagination of our chef. He treads skillfully between creativity and
        tradition, modernity and classicism. He delights the eye with artful
        presentation and the mouth with exquisite flavors touched by a hint of
        exoticism.
      </p>
      <p>
        Grab a fan favorite have no artificial colors or flavors. And now, no
        artificial preservatives. Or, try the Buttermilk Crispy Chicken
        Sandwich, with simple ingredients you’d find in your pantry.
      </p>
    </section>
  );
};

export default MealSummery;
