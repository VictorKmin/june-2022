const userDb = require("../dataBase/users");

module.exports = {
  getAllUsers: (req, res, next) => {
    try {
      console.log('USERS ENDPOINT!');

      res.json(userDb);
    } catch (e) {
      next(e);
    }
  },

  getUserById: (req, res, next) => {
    try {
      throw new Error('DSDADSA');

      res.json(req.user);
    } catch (e) {
      next(e)
    }
  },

  updateUser: (req, res, next) => {
    try {
      const newUserInfo = req.body;
      const userId = req.params.userId;

      userDb[userId] = newUserInfo;

      res.json('Updated')
    } catch (e) {
      next(e);
    }
  }
}
