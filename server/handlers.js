const request = require("request-promise");
const request2 = require("request");

const getReceipes = async (req, res) => {
  const ingredient = req.params.ingredient;
  const diet = req.body.diet; // array of string
  const dishType = req.body.dishType; // array of string
  const mealType = req.body.mealType; // array o string
  const cuisineType = req.body.cuisineType; // array of string
  const allergies = req.body.allergies; // array of string
  const caloriesFrom = req.body.caloriesFrom; // int number
  const caloriesTo = req.body.caloriesTo; // int number
  const IngredientsUpTo = req.body.IngredientsUpTo; // int number

  let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=10880cda&app_key=e35c7e28e89152af9ab4b7a40d2d7344`;

  if (diet) {
    diet.forEach((element) => {
      url += `&diet=${element}`;
    });
  }
  if (dishType) {
    dishType.forEach((element) => {
      url += `&dishType=${element}`;
    });
  }
  if (mealType) {
    mealType.forEach((element) => {
      url += `&mealType=${element}`;
    });
  }
  if (cuisineType) {
    cuisineType.forEach((element) => {
      url += `&cuisineType=${element}`;
    });
  }
  if (allergies) {
    allergies.forEach((element) => {
      url += `&excluded=${element}`;
    });
  }
  if (caloriesFrom && caloriesTo) {
    url += `&calories=${caloriesFrom}-${caloriesTo}`;
  }
  if (caloriesFrom && !caloriesTo) {
    url += `&calories=${caloriesFrom}%2B`;
  }
  if (caloriesTo && !caloriesFrom) {
    url += `&calories=${caloriesTo}`;
  }
  if (IngredientsUpTo) {
    url += `&ingr=${IngredientsUpTo}`;
  }

  const options = {
    method: "GET",
    url: url,
    headers: {
      Accept: "application/json",
    },
    json: true,
  };

  try {
    const result = await request(options);
    if (result.hits.length > 0) {
      res.status(200).json({ status: "200", data: result });
    } else {
      res.status(400).json({ status: 400, message: "err getting receipe" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: "unknown error" });
  }
};

const getIngredients = async (req, res) => {
  const ingredient = req.params.ingredient;

  let url = `https://api.edamam.com/auto-complete?app_id=444091a5&app_key=a560be6d6962c1c6f62f88facbd86504&q=${ingredient}`;
  const options = {
    method: "GET",
    url: url,
    headers: {
      Accept: "application/json",
    },
    json: true,
  };

  try {
    const result = await request(options);
    if (result.length > 0) {
      res.status(200).json({ status: "200", data: result });
    } else {
      res.status(400).json({ status: 400, message: "err getting receipe" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: "unknown error" });
  }
};

const getLocations = async (req, res) => {
  const location = req.params.location;

  let url = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete";

  const options = {
    method: "GET",
    url: url,
    qs: { query: `${location}`, lang: "en_US", units: "km" },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": "42e03287bamsh0f86482a7918be6p1bd974jsn98654b371017",
    },
    json: true,
  };

  try {
    const result = await request(options);
    if (result) {
      res.status(200).json({ status: "200", data: result.data });
    } else {
      res.status(400).json({ status: 400, message: "err getting locations" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: "unknown error" });
  }
};

const getRestaurants = async (req, res) => {
  const locationId = req.params.locationId;

  let url = "https://travel-advisor.p.rapidapi.com/restaurants/list";

  const options = {
    method: "GET",
    url: url,
    qs: {
      location_id: `${locationId}`,
      currency: "CAD",
      lunit: "km",
      limit: "30",
      open_now: "false",
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": "42e03287bamsh0f86482a7918be6p1bd974jsn98654b371017",
    },
    json: true,
  };

  try {
    const result = await request(options);
    if (result) {
      res.status(200).json({ status: "200", data: result.data });
    } else {
      res.status(400).json({ status: 400, message: "err getting locations" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: "unknown error" });
  }
};

const getRestaurant = async (req, res) => {
  const locationId = req.params.locationId;

  let url = "https://travel-advisor.p.rapidapi.com/restaurants/get-details";

  const options = {
    method: "GET",
    url: url,
    qs: {
      location_id: `${locationId}`,
      currency: "CAD",
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": "42e03287bamsh0f86482a7918be6p1bd974jsn98654b371017",
    },
    json: true,
  };

  try {
    const result = await request(options);
    if (result) {
      res.status(200).json({ status: "200", data: result });
    } else {
      res.status(400).json({ status: 400, message: "err getting locations" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: "unknown error" });
  }
};

module.exports = {
  getReceipes,
  getIngredients,
  getLocations,
  getRestaurants,
  getRestaurant,
};
