const axios = require('axios');
const url = 'http://localhost:3000/api/users';

exports.homeRoutes = (req, res) => {
  (async () => {
    try {
      const r = await axios.get(url);
      res.render('index', { users: r.data });
    } catch (er) {
      res.send(er);
    }
  })();
};
exports.add_user = (req, res) => {
  res.render('add_user');
};
exports.update_user = (req, res) => {
  (async () => {
    try {
      const id = req.query.id;
      const r = await axios.get(url, { params: { id: req.query.id } });
      res.render('update_user', { user: r.data });
    } catch (er) {
      res.send(er);
    }
  })();
};
