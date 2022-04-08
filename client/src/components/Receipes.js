import { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const Receipes = () => {
  const [ingredient, setIngredient] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    setIngredient(e);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    fetch(`/api/get-ingredients/${ingredient}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          setIngredients(result.data);
        }
      });
  };

  const receipeHandler = (e) => {
    e.preventDefault();
    history.push(`/find-receipes/${ingredient}`);
  };

  console.log(ingredients);

  return (
    <>
      <FORM>
        <input
          type="text"
          placeholder="ingredient"
          value={ingredient}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button onClick={(e) => clickHandler(e)}>Find ingredient</button>
        <button onClick={(e) => receipeHandler(e)}>Find receipes</button>
      </FORM>
      {!!ingredients.length && (
        <Wrapper>
          {ingredients.map((element) => {
            return <div>{`=> ${element}`}</div>;
          })}
        </Wrapper>
      )}
    </>
  );
};
export default Receipes;

const FORM = styled.form`
  display: flex;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LINK = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
