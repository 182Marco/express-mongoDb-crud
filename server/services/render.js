const axios = require('axios');
const url = 'http://localhost:3000/api/users';

exports.homeRoutes = (req, res) => {
  (async () => {
    try {
      const r = await axios.get(url);
      res.render('index', { users: r.data });
    } catch (er) {
      console.log(er);
    }
  })();
};
exports.add_user = (req, res) => {
  res.render('add_user');
};
exports.update_user = (req, res) => {
  res.render('update_user');
};
