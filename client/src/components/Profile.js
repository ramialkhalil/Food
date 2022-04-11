import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FoodContext } from "./FoodContext";

const Profile = () => {
  const { user, setUser } = useContext(FoodContext);

  if (!user) {
    return <></>;
  }
  return (
    <>
      <div>{user.userName}</div>
    </>
  );
};

export default Profile;
