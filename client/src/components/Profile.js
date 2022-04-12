import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FoodContext } from "./FoodContext";

const Profile = () => {
  const { user } = useContext(FoodContext);
  if (!user) {
    return <></>;
  }
  return (
    <>
      <div>{user.userName}</div>
      {user.restaurants &&
        user.restaurants.map((element) => {
          return <div>{element.restaurantName}</div>;
        })}
    </>
  );
};

export default Profile;
