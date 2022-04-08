import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`/api/get-restaurant-details/${restaurantId}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          setRestaurant(result.data);
        }
      });
  }, []);

  return (
    <>
      {restaurant ? (
        <Wrapper>
          <HEADER>
            <div>{restaurant.name}</div>
          </HEADER>
          <BODY>
            <Image>
              <img src={restaurant.photo.images.large.url} />
            </Image>
            <DIV>
              <h2>Ratings and reviews</h2>
            </DIV>
            <DIV>
              <h2>Details</h2>
              <SUBDIV>
                <h3>Meal Types:</h3>
                <SUBSUBDIV>
                  {restaurant.meal_types.map((element) => {
                    return <div>{element.name}</div>;
                  })}
                </SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>Special diets:</h3>
                <SUBSUBDIV>
                  {restaurant.dietary_restrictions.map((element) => {
                    return <div>{element.name}</div>;
                  })}
                </SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>Dishes:</h3>
                <SUBSUBDIV>
                  {restaurant.dishes.map((element) => {
                    return <div>{element.name}</div>;
                  })}
                </SUBSUBDIV>
              </SUBDIV>
            </DIV>
            <DIV>
              <h2>Location and contact</h2>
              <SUBDIV>
                <div>{restaurant.address}</div>
                <a
                  target="_blank"
                  href={`https://www.google.ca/maps/place/${restaurant.address}`}
                >
                  View on Map
                </a>
              </SUBDIV>
              <div>{restaurant.email}</div>
              <div>{restaurant.website}</div>
              <div>{restaurant.phone}</div>
            </DIV>
          </BODY>
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  min-height: 100vh;
`;
const SUBSUBDIV = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;
const SUBDIV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
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
const HEADER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 10px;
`;
const BODY = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;
export default RestaurantDetails;
