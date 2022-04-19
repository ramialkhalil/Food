import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext(null);

const FoodProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setUser(JSON.parse(localStorage.getItem("login")));
    }
  }, []);

  const getUser = () => {
    fetch(`/api/get-user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: user.userName,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          setUser(result.data);
        }
      });
  };

  const AddRestaurantToWishList = (restaurant) => {
    if (user) {
      fetch(`/api/addRestaurantToUser`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: user.userName,
          restaurant: restaurant,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          getUser();
        });
    }
  };

  const removeRestaurantFromList = (restaurant) => {
    if (user) {
      fetch(`/api/removeRestaurantFromUser`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: user.userName,
          name: restaurant.name,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.data) {
            getUser();
          }
        });
    }
  };

  const AddReceipeToList = (receipe) => {
    if (user) {
      fetch(`/api/addReceipeToUser`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: user.userName,
          receipe: receipe,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          getUser();
          setReload(!reload);
        });
    }
  };

  const removeReceipeFromList = (receipe) => {
    if (user) {
      fetch(`/api/removeReceipeFromUser`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: user.userName,
          label: receipe.label,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.data) {
            getUser();
          }
        });
    }
  };

  return (
    <FoodContext.Provider
      value={{
        user,
        setUser,
        AddRestaurantToWishList,
        reload,
        setReload,
        removeRestaurantFromList,
        AddReceipeToList,
        removeReceipeFromList,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
export default FoodProvider;
