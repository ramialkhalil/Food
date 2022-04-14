import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Receipe from "./Receipe";

const ReceipesResult = () => {
  const { ingredient } = useParams();
  const [search, setSearch] = useState(null);
  useEffect(() => {
    setSearch(JSON.parse(sessionStorage.getItem("receipes")));
    console.log(JSON.parse(sessionStorage.getItem("receipes")));
  }, []);
  if (!search) {
    return <></>;
  }
  return (
    <>
      <HEADER>
        <div>{`Top ${ingredient} receipes`}</div>
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
  color: black;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 10px;
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
