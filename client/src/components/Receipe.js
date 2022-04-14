import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Receipe = ({ element }) => {
  const receipeId = element.uri.split("_");
  return (
    <>
      <DIV>
        <SUBDIV>
          <img src={element.images?.SMALL?.url} />
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
          <div>{element.calories}</div>
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
  width: 300px;
  height: 350px;
  background-color: whitesmoke;
`;

const LINK = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding-left: 5px;
`;
