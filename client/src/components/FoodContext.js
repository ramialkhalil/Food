import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext(null);

const FoodProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setUser(JSON.parse(localStorage.getItem("login")));
    }
  }, []);
  return (
    <FoodContext.Provider value={{ user, setUser }}>
      {children}
    </FoodContext.Provider>
  );
};
export default FoodProvider;
