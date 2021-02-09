const axios = require("axios");

exports.Home = (req, res) => {
  res.render("home", {postOffices: []});
};

exports.getList = (req, res) => {
  const { city } = req.body;
  const url = `https://api.postalpincode.in/postoffice/${city}`;
  axios
    .get(url)
    .then(function (response) {
      // handle success
      const postOffices = response.data[0].PostOffice;
      res.render("home", {postOffices: postOffices});
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
