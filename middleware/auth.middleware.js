const OAuth = require('../dataBase/OAuth');
const authValidator = require('../validator/auth.validator');
const oauthService = require("../service/oauth.service");

const ApiError = require("../error/ApiError");
const { tokenTypeEnum } = require('../enum');

module.exports = {
  isBodyValid: async (req, res, next) => {
    try {
      const validate = authValidator.loginValidator.validate(req.body);

      if (validate.error) {
        throw new ApiError(validate.error.message);
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  checkAccessToken: async (req, res, next) => {
    try {
      const accessToken = req.get('Authorization');

      if (!accessToken) {
        throw new ApiError('No token', 401);
      }

      oauthService.checkToken(accessToken);

      const tokenInfo = await OAuth.findOne({ accessToken });

      if (!tokenInfo) {
        throw new ApiError('Token not valid', 401);
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  checkRefreshToken: async (req, res, next) => {
    try {
      const refreshToken = req.get('Authorization');

      if (!refreshToken) {
        throw new ApiError('No token', 401);
      }

      oauthService.checkToken(refreshToken, tokenTypeEnum.refreshToken);

      const tokenInfo = await OAuth.findOne({ refreshToken });

      if (!tokenInfo) {
        throw new ApiError('Token not valid', 401);
      }

      req.tokenInfo = tokenInfo;
      next();
    } catch (e) {
      next(e);
    }
  }
}
