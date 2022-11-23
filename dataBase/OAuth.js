const { Schema, model } = require('mongoose');

const OAuthSchema = new Schema({
  _user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  accessToken: { type: String },
  refreshToken: { type: String },
}, {
  timestamps: true
});

module.exports = model('O_Auth', OAuthSchema);
