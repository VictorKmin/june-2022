const { userService } = require('../service');

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.findByParams();

      res.json(users);
    } catch (e) {
      next(e);
    }
  },

  getUserById: async (req, res, next) => {
    try {
      const user = await userService.findByIdWithCars(req.user._id);

      res.json(user);
    } catch (e) {
      next(e)
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const newUserInfo = req.body;
      const userId = req.params.userId;

      const user = await userService.updateOne(userId, newUserInfo);

      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    try {
      const user = await userService.create(req.body);

      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  },

  deleteUserById: async (req, res, next) => {
    try {
      await userService.deleteOne(req.params.userId);

      res.status(204).send('Ok')
    } catch (e) {
      next(e);
    }
  }
};
