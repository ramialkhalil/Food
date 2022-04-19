import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Location = () => {
  const [city, setCity] = useState("");
  const [citiesDetails, setCitiesDetails] = useState([]);

  const handleChange = (e) => {
    setCity(e);
  };

  const getCitiesDetails = (cities) => {
    const array = cities
      .filter((element) => {
        return element.__typename === "Typeahead_LocationItem";
      })
      .map((e) => {
        const latitude = e.detailsV2.geocode.latitude;
        const longitude = e.detailsV2.geocode.longitude;
        const locationId = e.detailsV2.locationId;
        const cityName = e.detailsV2.names.name;
        const location = e.detailsV2.names.longOnlyHierarchyTypeaheadV2;
        const cityType = e.detailsV2.placeType;
        const cityDetails = {
          geocode: { latitude, longitude },
          locationId: locationId,
          cityName: cityName,
          location: location,
          cityType: cityType,
        };
        return cityDetails;
      });
    setCitiesDetails(array);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    fetch(`/api/get-locations/${city}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          getCitiesDetails(result.data.Typeahead_autocomplete.results);
        }
      });
  };

  return (
    <>
      <FORM>
        <input
          required
          type="text"
          placeholder="city"
          value={city}
          onChange={(e) => handleChange(e.target.value)}
        />
        {city ? (
          <BUTTON onClick={(e) => clickHandler(e)}>Find</BUTTON>
        ) : (
          <BUTTON disabled onClick={(e) => clickHandler(e)}>
            Find
          </BUTTON>
        )}
      </FORM>
      {!!citiesDetails.length && (
        <Wrapper>
          {citiesDetails.map((element) => {
            return (
              <LINK
                to={`/find-restaurant/${element.locationId}?city=${element.cityName}`}
              >
                {`=> ${element.cityName}`}
              </LINK>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};
export default Location;

const FORM = styled.form`
  display: flex;
  gap: 10px;
`;

const BUTTON = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: green;
  border: solid green;
  border-radius: 10px;
  cursor: pointer;
  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LINK = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
