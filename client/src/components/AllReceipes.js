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
      <FORM onChange={setFormData}>
        <HEADER>
          <div>{`${ingredient}`}</div>
          <button onClick={(e) => doneHandler(e)}>Find receipes</button>
        </HEADER>
        <BODY>
          <DIV>
            <h2>Calories</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <SUBDIV>
                <label>From</label>
                <input
                  min="1"
                  type="number"
                  id="from"
                  style={{ width: "60px" }}
                />
              </SUBDIV>
              <SUBDIV>
                <label>To</label>
                <input
                  min="1"
                  type="number"
                  id="to"
                  style={{ width: "60px" }}
                />
              </SUBDIV>
            </div>
            <h2>Diet</h2>
            <SUBDIV>
              <input type="checkbox" name="diet" value="balanced" />
              <label>Balanced</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="diet" value="high-fiber" />
              <label>High-Fiber</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="diet" value="high-protein" />
              <label>High-Protein</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="diet" value="low-carb" />
              <label>Low-Carb</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="diet" value="low-fat" />
              <label>Low-Fat</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="diet" value="low-sodium" />
              <label>Low-Sodium</label>
            </SUBDIV>
            <h2>Dish Type</h2>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Alcohol-cocktail" />
              <label>Alcohol-cocktail</label>
            </SUBDIV>
            <SUBDIV>
              <input
                type="checkbox"
                name="dishType"
                value="Biscuits and cookies"
              />
              <label>Biscuits and cookies</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Bread" />
              <label>Bread</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Cereals" />
              <label>Cereals</label>
            </SUBDIV>
            <SUBDIV>
              <input
                type="checkbox"
                name="dishType"
                value="Condiments and sauces"
              />
              <label>Condiments and sauces</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Drinks" />
              <label>Drinks</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Desserts" />
              <label>Desserts</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Egg" />
              <label>Egg</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Main course" />
              <label>Main course</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Omelet" />
              <label>Omelet</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Pancake" />
              <label>Pancake</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Preps" />
              <label>Preps</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Preserve" />
              <label>Preserve</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Salad" />
              <label>Salad</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Sandwiches" />
              <label>Sandwiches</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Soup" />
              <label>Soup</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="dishType" value="Starter" />
              <label>Starter</label>
            </SUBDIV>
          </DIV>
          <DIV>
            <h2>Number of Ingridients</h2>
            <SUBDIV>
              <label>Up to</label>
              <input
                min="1"
                type="number"
                id="upto"
                style={{ width: "60px" }}
              />
            </SUBDIV>
            <h2>Meal Type</h2>
            <SUBDIV>
              <input type="checkbox" name="mealType" value="Breakfast" />
              <label>Breakfast</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="mealType" value="Lunch" />
              <label>Lunch</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="mealType" value="Dinner" />
              <label>Dinner</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="mealType" value="Snack" />
              <label>Snack</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="mealType" value="Teatime" />
              <label>Teatime</label>
            </SUBDIV>
            <h2>Cuisine Types</h2>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="American" />
              <label>American</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="Asian" />
              <label>Asian</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="British" />
              <label>British</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="Caribbean" />
              <label>Caribbean</label>
            </SUBDIV>
            <SUBDIV>
              <input
                type="checkbox"
                name="cuisineType"
                value="Central Europe"
              />
              <label>Central Europe</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="Chinese" />
              <label>Chinese</label>
            </SUBDIV>
            <SUBDIV>
              <input
                type="checkbox"
                name="cuisineType"
                value="Eastern Europe"
              />
              <label>Eastern Europe</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="French" />
              <label>French</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="Indian" />
              <label>Indian</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="Italian" />
              <label>Italian</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="Japanese" />
              <label>Japanese</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="Kosher" />
              <label>Kosher</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="Mediterranean" />
              <label>Mediterranean</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="Mexican" />
              <label>Mexican</label>
            </SUBDIV>
            <SUBDIV>
              <input
                type="checkbox"
                name="cuisineType"
                value="Middle Eastern"
              />
              <label>Middle Eastern</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="cuisineType" value="Nordic" />
              <label>Nordic</label>
            </SUBDIV>
            <SUBDIV>
              <input
                type="checkbox"
                name="cuisineType"
                value="South American"
              />
              <label>South American</label>
            </SUBDIV>
            <SUBDIV>
              <input
                type="checkbox"
                name="cuisineType"
                value="South East Asian"
              />
              <label>South East Asian</label>
            </SUBDIV>
          </DIV>
          <DIV>
            <h2>Allergie</h2>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="alcohol-cocktail" />
              <label>Alcohol-Cocktail</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="alcohol-free" />
              <label>Alcohol-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="celery-free" />
              <label>Celery-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="crustacean-free" />
              <label>Crustcean-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="dairy-free" />
              <label>Dairy-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="DASH" />
              <label>DASH</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="egg-free" />
              <label>Egg-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="fish-free" />
              <label>Fish-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="fodmap-free" />
              <label>FODMAP-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="gluten-free" />
              <label>Gluten-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input
                type="checkbox"
                name="allergie"
                value="immuno-supportive"
              />
              <label>Immuno-Supportive</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="keto-friendly" />
              <label>Keto-Friendly</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="kidney-friendly" />
              <label>Kidney-Friendly</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="kosher" />
              <label>Kosher</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="low-potassium" />
              <label>Low Potassium</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="low-sugar" />
              <label>Low Sugar</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="lupine-free" />
              <label>Lupine-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="Mediterranean" />
              <label>Mediterranean</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="mollusk-free" />
              <label>Mollusk-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="mustard-free" />
              <label>Mustard-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="No-oil-added" />
              <label>No oil added</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="paleo" />
              <label>Paleo</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="peanut-free" />
              <label>Peanut-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="pecatarian" />
              <label>Pescatarian</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="pork-free" />
              <label>Pork-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="red-meat-free" />
              <label>Red-Meat-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="sesame-free" />
              <label>Sesame-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="shellfish-free" />
              <label>Shellfish-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="soy-free" />
              <label>Soy-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="sugar-conscious" />
              <label>Sugar-Conscious</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="sulfite-free" />
              <label>Sulfite-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="tree-nut-free" />
              <label>Tree-Nut-Free</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="vegan" />
              <label>Vegan</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="vegetarian" />
              <label>Vegetarian</label>
            </SUBDIV>
            <SUBDIV>
              <input type="checkbox" name="allergie" value="wheat-free" />
              <label>Wheat-Free</label>
            </SUBDIV>
          </DIV>
        </BODY>
      </FORM>
    </>
  );
};
export default AllReceipes;

const FORM = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 100vh;
  position: absolute;
  top: 60%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const BODY = styled.div`
  display: flex;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: whitesmoke;
  height: 100%;
  padding: 10px;
`;

const SUBDIV = styled.div`
  display: flex;
  gap: 5px;
`;

const HEADER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: black;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 10px;
  background-color: whitesmoke;
`;
