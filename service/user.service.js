const User = require("../dataBase/User");

module.exports = {
  findByParams: async (filter = {}) => {
    return User.find(filter);
  },

  findOneByParams: async (filter = {}) => {
    return User.findOne(filter);
  },

  findByIdWithCars: async (userId) => {
    const res = await User.aggregate([
      {
        $match: {
          _id: userId
        }
      },
      {
        $lookup: {
          from: 'cars',
          localField: '_id',
          foreignField: 'user',
          as: 'cars',
        }
      }
    ]);

    return res[0];
  },

  create: async (userInfo) => {
    return User.create(userInfo);
  },

  updateOne: async (userId, newInfo) => {
    return User.findByIdAndUpdate(userId, newInfo, { new: true });
  },

  deleteOne: async (userId) => {
    return User.deleteOne({ _id: userId });
  },


}
