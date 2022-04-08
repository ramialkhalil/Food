import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Restaurant = () => {
  const { locationId } = useParams();
  const search = useLocation().search;
  const city = new URLSearchParams(search).get("city");
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    fetch(`/api/get-restaurants/${locationId}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          console.log(result.data);
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
            return (
              element.name && (
                <DIV>
                  <SUBDIV>
                    <img src={element.photo?.images?.small?.url} />
                  </SUBDIV>
                  <SUBDIV>
                    <LINK
                      to={`/find-restaurant/${locationId}/${element.location_id}`}
                    >
                      {element.name}
                    </LINK>
                  </SUBDIV>
                  <SUBDIV>
                    <b>Rating: </b>
                    <div>{element.rating}</div>
                  </SUBDIV>
                  <SUBDIV>
                    <b>reviews: </b>
                    <div>{element.num_reviews}</div>
                  </SUBDIV>
                </DIV>
              )
            );
          })}
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};
export default Restaurant;

const HEADER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 10px;
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
  height: 300px;
  background-color: whitesmoke;
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

const LINK = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding-left: 5px;
`;
