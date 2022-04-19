import { Link } from "react-router-dom";
import styled from "styled-components";

const Restaurant = ({ element, locationId }) => {
  return (
    <>
      {element.name && (
        <DIV>
          <SUBDIV>
            <img src={element.photo?.images?.small?.url} alt={element.name} />
          </SUBDIV>
          <SUBDIV>
            <LINK to={`/find-restaurant/${locationId}/${element.location_id}`}>
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
      )}
    </>
  );
};
export default Restaurant;

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
  transition: color 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
  &:hover {
    box-shadow: inset 300px 0 0 0 white;
    color: green;
  }
`;
