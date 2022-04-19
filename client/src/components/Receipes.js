import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

  return (
    <>
      <FORM>
        <input
          required
          type="text"
          placeholder="ingredient"
          value={ingredient}
          onChange={(e) => handleChange(e.target.value)}
        />
        {!ingredient ? (
          <BUTTONDIV>
            <BUTTON disabled onClick={(e) => clickHandler(e)}>
              Find ingredient
            </BUTTON>
            <BUTTON disabled onClick={(e) => receipeHandler(e)}>
              Find recipes
            </BUTTON>
          </BUTTONDIV>
        ) : (
          <BUTTONDIV>
            <BUTTON onClick={(e) => clickHandler(e)}>Find ingredient</BUTTON>
            <BUTTON onClick={(e) => receipeHandler(e)}>Find recipes</BUTTON>
          </BUTTONDIV>
        )}
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

const BUTTONDIV = styled.div`
  display: flex;
  gap: 10px;
`;

const BUTTON = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: green;
  border: solid green;
  border-radius: 10px;
  cursor: pointer;
  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;

const FORM = styled.form`
  display: flex;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
