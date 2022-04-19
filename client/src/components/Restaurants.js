import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Restaurant from "./Restaurant";

const Restaurants = () => {
  const { locationId } = useParams();
  const search = useLocation().search;
  const city = new URLSearchParams(search).get("city");
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    fetch(`/api/get-restaurants/${locationId}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          setRestaurants(result.data);
        }
      });
  }, []);

  if (!restaurants) {
    return <></>;
  }
  return (
    <>
      <HEADER>
        <div>{`Top Restaurants in ${city}`}</div>
      </HEADER>
      {!!restaurants.length ? (
        <Wrapper>
          {restaurants.map((element) => {
            return <Restaurant element={element} locationId={locationId} />;
          })}
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};
export default Restaurants;

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
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px;
`;
