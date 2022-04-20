import { Link } from "react-router-dom";
import styled from "styled-components";

const Receipe = ({ element }) => {
  const receipeId = element.uri.split("_");

  return (
    <>
      <DIV>
        <SUBDIV>
          <IMAGE src={element.images?.SMALL?.url} alt={element.label} />
        </SUBDIV>
        <SUBDIV>
          <LINK to={`/receipe-details/${receipeId[1]}`}>{element.label}</LINK>
        </SUBDIV>
        <DETAILSDIV>
          <SUBDIV>
            <b>cuisine type: </b>
            <div>
              {element.cuisineType.map((el) => {
                return <div>{el}</div>;
              })}
            </div>
          </SUBDIV>

          {/* <SUBDIV>
            <b>dish type: </b>
            <div>
              {element.dishType.map((el) => {
                return <div>{el}</div>;
              })}
            </div>
          </SUBDIV> */}
          <SUBDIV>
            <b>calories: </b>
            <div>{element.calories.toFixed(2)}</div>
          </SUBDIV>
        </DETAILSDIV>
      </DIV>
    </>
  );
};
export default Receipe;

const DETAILSDIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  bottom: 10px;
`;

const IMAGE = styled.img`
  max-width: 100%;
  min-width: 275px;
  max-height: 200px;
  min-height: 200px;
  border-radius: 10px 10px 0px 0px;
`;

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
  width: 275px;
  height: 340px;
  background-color: #8fbc8f;
  color: white;
  border-radius: 10px;
  position: relative;
`;

const LINK = styled(Link)`
  text-decoration: none;
  font-size: 14.5px;
  font-weight: bold;
  color: white;
  background-color: green;
  border: solid green;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 8px;
  padding: 10px;
  margin: 10px 10px 0px 10px;
  max-width: 400px;
  box-shadow: inset 0 0 0 0 green;
  transition: color 0.9s ease-out, box-shadow 0.9s ease-out;
  &:hover {
    box-shadow: inset 600px 0 0 0 white;
    color: green;
  }
`;
