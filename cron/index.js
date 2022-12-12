const removeOldTokens = require('./removeOldTokens');
const removeOldPasswords = require('./removeOldPasswords');

const cronRunner = () => {
  removeOldTokens.start();
  removeOldPasswords.start();
};

module.exports = {
  cronRunner,
};
