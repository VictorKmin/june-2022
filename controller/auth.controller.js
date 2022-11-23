const oauthService = require("../service/oauth.service");
const OAuth = require("../dataBase/OAuth");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { user, body } = req;

      await oauthService.comparePasswords(user.password, body.password);

      const tokenPair = oauthService.generateAccessTokenPair({ id: user._id });

      await OAuth.create({ ...tokenPair, _user_id: user._id })

      res.json({
        user,
        ...tokenPair
      });
    } catch (e) {
      next(e);
    }
  }
}
