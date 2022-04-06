const request = require("request-promise");

const getReceipes = async (req, res) => {
  const ingredient = req.params.ingredient;
  const options = {
    method: "GET",
    url: "https://edamam-recipe-search.p.rapidapi.com/search",
    qs: { q: `${ingredient}` },
    headers: {
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      "X-RapidAPI-Key": "42e03287bamsh0f86482a7918be6p1bd974jsn98654b371017",
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

module.exports = { getReceipes };
