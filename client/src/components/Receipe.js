import { Link } from "react-router-dom";
import styled from "styled-components";

const Receipe = ({ element }) => {
  const receipeId = element.uri.split("_");

  return (
    <>
      <DIV>
        <SUBDIV>
          <img src={element.images?.SMALL?.url} alt={element.label} />
        </SUBDIV>
        <SUBDIV>
          <LINK to={`/receipe-details/${receipeId[1]}`}>{element.label}</LINK>
        </SUBDIV>
        <SUBDIV>
          <b>cuisine type: </b>
          <div>
            {element.cuisineType.map((el) => {
              return <div>{el}</div>;
            })}
          </div>
        </SUBDIV>
        <SUBDIV>
          <b>calories: </b>
          <div>{element.calories.toFixed(2)}</div>
        </SUBDIV>
        <SUBDIV>
          <b>dish type: </b>
          <div>
            {element.dishType.map((el) => {
              return <div>{el}</div>;
            })}
          </div>
        </SUBDIV>
      </DIV>
    </>
  );
};
export default Receipe;

const SUBDIV = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 500px;
  height: 400px;
  background-color: #8fbc8f;
  color: white;
  border-radius: 10px;
`;

const LINK = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: green;
  border: solid green;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 8px;
  padding: 10px;
  box-shadow: inset 0 0 0 0 green;
  transition: color 0.9s ease-out, box-shadow 0.9s ease-out;
  &:hover {
    box-shadow: inset 600px 0 0 0 white;
    color: green;
  }
`;
