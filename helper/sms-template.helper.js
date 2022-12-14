const { smsActionTypeEnum } = require('../enum');

module.exports = {
  [smsActionTypeEnum.WELCOME]: (name) => {
    return `Hi ${name}, welcome on our platform!`;
  },

  [smsActionTypeEnum.FORGOT_PASS]: (name) => {
    return `Hi ${name}, chek email`;
  },
}
