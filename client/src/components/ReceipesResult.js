import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Receipe from "./Receipe";

const ReceipesResult = () => {
  const { ingredient } = useParams();
  const [search, setSearch] = useState(null);

  useEffect(() => {
    setSearch(JSON.parse(sessionStorage.getItem("receipes")));
  }, []);

  if (!search) {
    return <></>;
  }
  return (
    <>
      <HEADER>
        <div>{`Top ${ingredient} recipes`}</div>
      </HEADER>
      <Wrapper>
        {search.hits.map((element) => {
          return <Receipe element={element.recipe} />;
        })}
      </Wrapper>
    </>
  );
};
export default ReceipesResult;

const HEADER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  & div {
    font-size: 32px;
    font-weight: bold;
    color: white;
    background-color: green;
    border: solid green;
    border-radius: 10px;
    padding: 10px;
    border: solid #8fbc8f;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px;
`;
