import { useContext } from "react";
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
        <Wrapper>
          <HEADER>
            <div>{`Your Favorite restaurants`}</div>
          </HEADER>
          <div>
            {user.restaurants &&
              user.restaurants.map((el) => {
                return (
                  <RDIV>
                    <Restaurant element={el} locationId={el.ranking_geo_id} />
                  </RDIV>
                );
              })}
          </div>
        </Wrapper>
      </DIV>
      <DIV>
        <Wrapper>
          <HEADER>
            <div>{`Your Favorite recipes`}</div>
          </HEADER>
          {user.receipes &&
            user.receipes.map((element) => {
              return (
                <RDIV>
                  <Receipe element={element} />
                </RDIV>
              );
            })}
        </Wrapper>
      </DIV>
    </>
  );
};

export default Profile;
const RDIV = styled.div`
  margin-bottom: 50px;
  border-bottom: solid white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8fbc8f;
  margin: 10px;
  padding: 10px;
  width: 50%;
  border-radius: 10px;
  align-items: center;
`;

const HEADER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  font-size: 32px;
  font-weight: bolder;
  padding: 15px;
  background-color: #8fbc8f;
  border-bottom: solid;
  margin-bottom: 30px;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
