import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FoodContext } from "./FoodContext";
import Receipe from "./Receipe";
import Restaurant from "./Restaurant";
const Profile = () => {
  const { user } = useContext(FoodContext);
  if (!user) {
    return <></>;
  }
  return (
    <>
      <DIV>
        <HEADER>
          <div>{`Your Favourite restaurants`}</div>
        </HEADER>
        <Wrapper>
          {user.restaurants &&
            user.restaurants.map((el) => {
              return <Restaurant element={el} locationId={el.ranking_geo_id} />;
            })}
        </Wrapper>
      </DIV>
      <DIV>
        <HEADER>
          <div>{`Your Favourite receipes`}</div>
        </HEADER>
        <Wrapper>
          {user.receipes &&
            user.receipes.map((element) => {
              return <Receipe element={element} />;
            })}
        </Wrapper>
      </DIV>
    </>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
  //margin: 15px;
`;
const HEADER = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: black;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 10px;
`;
const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  background-color: whitesmoke;
  margin: 15px;
  padding: 10px;
`;
