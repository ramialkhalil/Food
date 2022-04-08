import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import FoodProvider from "./components/FoodContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FoodProvider>
    <App />
  </FoodProvider>
);
