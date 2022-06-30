const router = require("express").Router();
const axios = require('axios')

/* GET home page */
router.get("/", (req, res, next) => {
  // get some data from the star wars api
  axios.get('https://swapi.py4e.com/api/films/')
    .then(response => {
      console.log(response.data.results)
      // and display it in the view
      res.render("index", { movies: response.data.results });
    })
    .catch(err => {
      next(err)
    })
});

module.exports = router;
