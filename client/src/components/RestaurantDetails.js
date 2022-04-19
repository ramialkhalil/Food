import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { FcLike, FcLikePlaceholder, FcPhone, FcGlobe } from "react-icons/fc";
import { MdAlternateEmail, MdRestaurantMenu } from "react-icons/md";
import { FoodContext } from "./FoodContext";

const RestaurantDetails = () => {
  const { AddRestaurantToWishList, user, removeRestaurantFromList } =
    useContext(FoodContext);
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [inlist, setInlist] = useState(null);

  useEffect(() => {
    fetch(`/api/get-restaurant-details/${restaurantId}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          setRestaurant(result.data);
        }
      });
  }, []);

  useEffect(() => {
    if (user && restaurant) {
      const restaurantFilter = user.restaurants.filter((element) => {
        return element.name === restaurant.name;
      });
      if (!!restaurantFilter.length) {
        setInlist("true");
      } else {
        setInlist(null);
      }
    }
  }, [restaurant, user]);

  if (!restaurant) {
    return <></>;
  }
  return (
    <>
      {restaurant ? (
        <Wrapper>
          <Image>
            <IMAGE src={restaurant.photo.images.large.url} />
          </Image>
          <BODY>
            <DIV>
              <HEADER>
                <div>{restaurant.name}</div>
                {user &&
                  (inlist === "true" ? (
                    <div onClick={() => removeRestaurantFromList(restaurant)}>
                      <FcLike />
                    </div>
                  ) : (
                    <div onClick={() => AddRestaurantToWishList(restaurant)}>
                      <FcLikePlaceholder />
                    </div>
                  ))}
              </HEADER>
            </DIV>
            {restaurant.description && (
              <DIV>
                <SUBDIV>{restaurant.description}</SUBDIV>
              </DIV>
            )}
            <DIV>
              <SUBHEADER>Ratings and Awards</SUBHEADER>
              <SUBDIV>
                <h3>Ranking:</h3>
                <SUBSUBDIV>{restaurant.ranking}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>Rating:</h3>
                <SUBSUBDIV>{restaurant.rating}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>Reviews:</h3>
                <SUBSUBDIV>{restaurant.num_reviews}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>Awards:</h3>
                <SUBSUBDIV>
                  {restaurant.awards.map((element) => {
                    return (
                      <div>
                        <li>{element.display_name}</li>
                      </div>
                    );
                  })}
                </SUBSUBDIV>
              </SUBDIV>
            </DIV>
            <DIV>
              <SUBHEADER>Details</SUBHEADER>
              <SUBDIV>
                <h3>Menu:</h3>
                <SUBSUBDIV>
                  <LINK target="_blank" href={`${restaurant.website}`}>
                    <MdRestaurantMenu />
                    Menu
                  </LINK>
                </SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>Meal Types:</h3>
                <SUBSUBDIV>
                  {restaurant.meal_types.map((element) => {
                    return <li>{element.name}</li>;
                  })}
                </SUBSUBDIV>
              </SUBDIV>
              {restaurant.price && (
                <SUBDIV>
                  <h3>Price:</h3>
                  <SUBSUBDIV>{restaurant.price}</SUBSUBDIV>
                </SUBDIV>
              )}

              <SUBDIV>
                <h3>Special diets:</h3>
                <SUBSUBDIV>
                  {restaurant.dietary_restrictions.map((element) => {
                    return <li>{element.name}</li>;
                  })}
                </SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>Dishes:</h3>
                <SUBSUBDIV>
                  {restaurant.dishes.map((element) => {
                    return <li>{element.name}</li>;
                  })}
                </SUBSUBDIV>
              </SUBDIV>
            </DIV>
            <DIV style={{ gap: "20px" }}>
              <SUBHEADER>Location and contact</SUBHEADER>
              <SUBDIV>
                <LINK
                  target="_blank"
                  href={`https://www.google.ca/maps/place/${restaurant.address}`}
                >
                  <GoLocation />
                  <div>{restaurant.address}</div>
                  <GrMapLocation />
                </LINK>
              </SUBDIV>
              <SUBDIV>
                <MdAlternateEmail />
                {restaurant.email}
              </SUBDIV>
              <SUBDIV>
                <LINK target="_blank" href={`${restaurant.website}`}>
                  <FcGlobe />
                  {restaurant.website.split("http://")}
                </LINK>
              </SUBDIV>
              <SUBDIV>
                <FcPhone />
                {restaurant.phone}
              </SUBDIV>
            </DIV>
          </BODY>
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};

const LINK = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  gap: 10px;
`;

const IMAGE = styled.img`
  max-width: 50vw;
  max-height: 50vh;
`;

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
  padding-top: 23px;
  font-size: 14px;
`;

const SUBDIV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const SUBHEADER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: bolder;
  padding-bottom: 5px;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8fbc8f;
  margin: 5px;
  padding: 10px;
  padding-left: 40px;
  width: 50%;
  gap: 10px;
  border-radius: 10px;
`;

const HEADER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  font-size: 32px;
  font-weight: bolder;
  padding-bottom: 10px;
`;

const BODY = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default RestaurantDetails;
