const axios = require('axios');

module.exports.fetchRepos = (req, res) => {
  var config = {
    headers: { 'User-Agent': 'request' },
    json: true
  };
  axios.get(`https://api.github.com/users/${req.params.user}/repos`)
    .then(results => {

      let names = ['Omni-Chat', 'Evently', 'Home-Feels'];
      let projects = results.data.filter( repo => {
        return (repo.name === names[0] || repo.name === names[1] || repo.name === names[2]);
      });
      let exercises = results.data.filter( repo => {
        return (repo.name !== names[0] && repo.name !== names[1] && repo.name !== names[2]);
      });
      res.status(200).send([projects, exercises]);
    })
    .catch(err => {
      console.log(`Inside Error: ${err}`);
      res.status(400).send(err);
    });
};
