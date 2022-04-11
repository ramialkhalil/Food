import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const AllReceipes = () => {
  const { ingredient } = useParams();

  const [diet, setDiet] = useState([]);
  const [dishType, setDishType] = useState(null);
  const [mealType, setMealType] = useState(null);
  const [cuisineType, setCuisineType] = useState(null);
  const [allergies, setAllergies] = useState(null);
  const [caloriesFrom, setCaloriesFrom] = useState(null);
  const [caloriesTo, setCaloriesTo] = useState(null);
  const [ingredientsUpTo, setIngredientsUpTo] = useState(null);

  const history = useHistory();

  const setFormData = (e) => {
    setDiet(
      Array.from(document.querySelectorAll("input[name='diet']:checked")).map(
        (elem) => elem.value
      )
    );
    setDishType(
      Array.from(
        document.querySelectorAll("input[name='dishType']:checked")
      ).map((elem) => elem.value)
    );
    setMealType(
      Array.from(
        document.querySelectorAll("input[name='mealType']:checked")
      ).map((elem) => elem.value)
    );
    setCuisineType(
      Array.from(
        document.querySelectorAll("input[name='cuisineType']:checked")
      ).map((elem) => elem.value)
    );
    setAllergies(
      Array.from(
        document.querySelectorAll("input[name='allergie']:checked")
      ).map((elem) => elem.value)
    );
    setCaloriesFrom(document.getElementById("from").value);
    setCaloriesTo(document.getElementById("to").value);
    setIngredientsUpTo(document.getElementById("upto").value);
  };

  const doneHandler = (e) => {
    e.preventDefault();
    console.log("new value:", diet);
    console.log("new value:", dishType);
    console.log("new value:", mealType);
    console.log("new value:", cuisineType);
    console.log("new value:", allergies);
    console.log("new value:", caloriesFrom);
    console.log("new value:", caloriesTo);
    console.log("new value:", ingredientsUpTo);

    fetch(`/api/get-receipes/${ingredient}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        diet: diet,
        dishType: dishType,
        mealType: mealType,
        cuisineType: cuisineType,
        allergies: allergies,
        caloriesFrom: caloriesFrom,
        caloriesTo: caloriesTo,
        ingredientsUpTo: ingredientsUpTo,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("test");
        if (result.data) {
          console.log("test2");
          sessionStorage.setItem("receipes", JSON.stringify(result.data));
          history.push(`/receipes/${ingredient}`);
        } else if (result.status === 400) {
          console.log(result.message);
        }
      });
  };

  return (
    <>
      <div>{`Find top receipes for ${ingredient}`}</div>
      <FORM onChange={setFormData}>
        <DIV>
          <h2>Calories</h2>
          <label>From</label>
          <input min="1" type="number" id="from" />
          <label>To</label>
          <input min="1" type="number" id="to" />
        </DIV>
        <DIV>
          <h2>number of ingridient</h2>
          <label>Up to</label>
          <input min="1" type="number" id="upto" />
        </DIV>
        <DIV>
          <h2>Diet</h2>
          <input type="checkbox" name="diet" value="balanced" />
          <label>Balanced</label>
          <input type="checkbox" name="diet" value="high-fiber" />
          <label>High-Fiber</label>
          <input type="checkbox" name="diet" value="high-protein" />
          <label>High-Protein</label>
          <input type="checkbox" name="diet" value="low-carb" />
          <label>Low-Carb</label>
          <input type="checkbox" name="diet" value="low-fat" />
          <label>Low-Fat</label>
          <input type="checkbox" name="diet" value="low-sodium" />
          <label>Low-Sodium</label>
        </DIV>
        <DIV>
          <h2>Dish Type</h2>
          <input type="checkbox" name="dishType" value="Alcohol-cocktail" />
          <label>Alcohol-cocktail</label>
          <input type="checkbox" name="dishType" value="Biscuits and cookies" />
          <label>Biscuits and cookies</label>
          <input type="checkbox" name="dishType" value="Bread" />
          <label>Bread</label>
          <input type="checkbox" name="dishType" value="Cereals" />
          <label>Cereals</label>
          <input
            type="checkbox"
            name="dishType"
            value="Condiments and sauces"
          />
          <label>Condiments and sauces</label>
          <input type="checkbox" name="dishType" value="Drinks" />
          <label>Drinks</label>
          <input type="checkbox" name="dishType" value="Desserts" />
          <label>Desserts</label>
          <input type="checkbox" name="dishType" value="Egg" />
          <label>Egg</label>
          <input type="checkbox" name="dishType" value="Main course" />
          <label>Main course</label>
          <input type="checkbox" name="dishType" value="Omelet" />
          <label>Omelet</label>
          <input type="checkbox" name="dishType" value="Pancake" />
          <label>Pancake</label>
          <input type="checkbox" name="dishType" value="Preps" />
          <label>Preps</label>
          <input type="checkbox" name="dishType" value="Preserve" />
          <label>Preserve</label>
          <input type="checkbox" name="dishType" value="Salad" />
          <label>Salad</label>
          <input type="checkbox" name="dishType" value="Sandwiches" />
          <label>Sandwiches</label>
          <input type="checkbox" name="dishType" value="Soup" />
          <label>Soup</label>
          <input type="checkbox" name="dishType" value="Starter" />
          <label>Starter</label>
        </DIV>
        <DIV>
          <h2>Meal Type</h2>
          <input type="checkbox" name="mealType" value="Breakfast" />
          <label>Breakfast</label>
          <input type="checkbox" name="mealType" value="Lunch" />
          <label>Lunch</label>
          <input type="checkbox" name="mealType" value="Dinner" />
          <label>Dinner</label>
          <input type="checkbox" name="mealType" value="Snack" />
          <label>Snack</label>
          <input type="checkbox" name="mealType" value="Teatime" />
          <label>Teatime</label>
        </DIV>
        <DIV>
          <h2>Cuisine Types</h2>
          <input type="checkbox" name="cuisineType" value="American" />
          <label>American</label>
          <input type="checkbox" name="cuisineType" value="Asian" />
          <label>Asian</label>
          <input type="checkbox" name="cuisineType" value="British" />
          <label>British</label>
          <input type="checkbox" name="cuisineType" value="Caribbean" />
          <label>Caribbean</label>
          <input type="checkbox" name="cuisineType" value="Central Europe" />
          <label>Central Europe</label>
          <input type="checkbox" name="cuisineType" value="Chinese" />
          <label>Chinese</label>
          <input type="checkbox" name="cuisineType" value="Eastern Europe" />
          <label>Eastern Europe</label>
          <input type="checkbox" name="cuisineType" value="French" />
          <label>French</label>
          <input type="checkbox" name="cuisineType" value="Indian" />
          <label>Indian</label>
          <input type="checkbox" name="cuisineType" value="Italian" />
          <label>Italian</label>
          <input type="checkbox" name="cuisineType" value="Japanese" />
          <label>Japanese</label>
          <input type="checkbox" name="cuisineType" value="Kosher" />
          <label>Kosher</label>
          <input type="checkbox" name="cuisineType" value="Mediterranean" />
          <label>Mediterranean</label>
          <input type="checkbox" name="cuisineType" value="Mexican" />
          <label>Mexican</label>
          <input type="checkbox" name="cuisineType" value="Middle Eastern" />
          <label>Middle Eastern</label>
          <input type="checkbox" name="cuisineType" value="Nordic" />
          <label>Nordic</label>
          <input type="checkbox" name="cuisineType" value="South American" />
          <label>South American</label>
          <input type="checkbox" name="cuisineType" value="South East Asian" />
          <label>South East Asian</label>
        </DIV>
        <DIV>
          <h2>allergies</h2>
          <input type="checkbox" name="allergie" value="alcohol-cocktail" />
          <label>Alcohol-Cocktail</label>
          <input type="checkbox" name="allergie" value="alcohol-free" />
          <label>Alcohol-Free</label>
          <input type="checkbox" name="allergie" value="celery-free" />
          <label>Celery-Free</label>
          <input type="checkbox" name="allergie" value="crustacean-free" />
          <label>Crustcean-Free</label>
          <input type="checkbox" name="allergie" value="dairy-free" />
          <label>Dairy-Free</label>
          <input type="checkbox" name="allergie" value="DASH" />
          <label>DASH</label>
          <input type="checkbox" name="allergie" value="egg-free" />
          <label>Egg-Free</label>
          <input type="checkbox" name="allergie" value="fish-free" />
          <label>Fish-Free</label>
          <input type="checkbox" name="allergie" value="fodmap-free" />
          <label>FODMAP-Free</label>
          <input type="checkbox" name="allergie" value="gluten-free" />
          <label>Gluten-Free</label>
          <input type="checkbox" name="allergie" value="immuno-supportive" />
          <label>Immuno-Supportive</label>
          <input type="checkbox" name="allergie" value="keto-friendly" />
          <label>Keto-Friendly</label>
          <input type="checkbox" name="allergie" value="kidney-friendly" />
          <label>Kidney-Friendly</label>
          <input type="checkbox" name="allergie" value="kosher" />
          <label>Kosher</label>
          <input type="checkbox" name="allergie" value="low-potassium" />
          <label>Low Potassium</label>
          <input type="checkbox" name="allergie" value="low-sugar" />
          <label>Low Sugar</label>
          <input type="checkbox" name="allergie" value="lupine-free" />
          <label>Lupine-Free</label>
          <input type="checkbox" name="allergie" value="Mediterranean" />
          <label>Mediterranean</label>
          <input type="checkbox" name="allergie" value="mollusk-free" />
          <label>Mollusk-Free</label>
          <input type="checkbox" name="allergie" value="mustard-free" />
          <label>Mustard-Free</label>
          <input type="checkbox" name="allergie" value="No-oil-added" />
          <label>No oil added</label>
          <input type="checkbox" name="allergie" value="paleo" />
          <label>Paleo</label>
          <input type="checkbox" name="allergie" value="peanut-free" />
          <label>Peanut-Free</label>
          <input type="checkbox" name="allergie" value="pecatarian" />
          <label>Pescatarian</label>
          <input type="checkbox" name="allergie" value="pork-free" />
          <label>Pork-Free</label>
          <input type="checkbox" name="allergie" value="red-meat-free" />
          <label>Red-Meat-Free</label>
          <input type="checkbox" name="allergie" value="sesame-free" />
          <label>Sesame-Free</label>
          <input type="checkbox" name="allergie" value="shellfish-free" />
          <label>Shellfish-Free</label>
          <input type="checkbox" name="allergie" value="soy-free" />
          <label>Soy-Free</label>
          <input type="checkbox" name="allergie" value="sugar-conscious" />
          <label>Sugar-Conscious</label>
          <input type="checkbox" name="allergie" value="sulfite-free" />
          <label>Sulfite-Free</label>
          <input type="checkbox" name="allergie" value="tree-nut-free" />
          <label>Tree-Nut-Free</label>
          <input type="checkbox" name="allergie" value="vegan" />
          <label>Vegan</label>
          <input type="checkbox" name="allergie" value="vegetarian" />
          <label>Vegetarian</label>
          <input type="checkbox" name="allergie" value="wheat-free" />
          <label>Wheat-Free</label>
        </DIV>
        <button onClick={(e) => doneHandler(e)}>Done</button>
      </FORM>
    </>
  );
};
export default AllReceipes;

const FORM = styled.form`
  display: flex;
  flex-wrap: wrap;
  background-color: whitesmoke;
  gap: 20px;
`;
const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
