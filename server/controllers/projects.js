const axios = require('axios');

module.exports.fetchRepos = (req, res) => {

  axios.get(`https://api.github.com/users/${req.params.user}/repos`)
    .then(results => {
      // console.log(`getting back results: ${results}`);
      res.status(200).send(results.data);
    })
    .catch(err => {
      console.log(`Inside Error: ${err}`);
      res.status(400).send(err);
    });
};
