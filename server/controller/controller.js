const UserDb = require('../model/model');
const userDb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.satus(400).send({ message: 'content can not be empty' });
    return;
  }
  // new user
  const user = new userDb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  // dave user
  user
    .save(user)
    .then(data => res.send(data))
    .catch(er =>
      res.status(500).send({
        message: er.message || 'some errror occurred while creating new user',
      })
    );
};

// retrive and return all users/ retrive and return a single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    UserDb.findById(id)
      .then(data => {
        if (!data) {
          res
            .status(404)
            .send({ messasge: `can't find any user with id=${id}` });
        } else {
          res.send(data);
        }
      })
      .catch(er =>
        res.status(500).send({ message: `An error occurred:${er}` })
      );
  }

  userDb
    .find()
    .then(user => res.send(user))
    .catch(er =>
      res
        .status(500)
        .send({ message: er.message || 'some errror occurred during search' })
    );
};

// Update identified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    res.satus(400).send({ message: 'data to update can not be empty' });
    return;
  }
  const id = req.params.id;
  userDb
    .findByIdAndUpdate(id, req.body, { userFindAndModify: false })
    .then(data => {
      if (!data) {
        res.satus(404).send({
          message: `Cannot update user with: ${id}, maybe user not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch(er => {
      res.status(500).send({ message: 'error, Upadate user information' });
    });
};

// Delete identified user by user id
exports.delete = (req, res) => {
  const id = req.params.id;

  UserDb.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res
          .status(404)
          .send({ message: `can not delete with id ${id}, maybe id is wrong` });
      } else {
        res.send({ message: 'successfully deleted' });
      }
    })
    .catch(er =>
      res.status(500).send({ message: `couldn't delete user with id=${id}` })
    );
};
