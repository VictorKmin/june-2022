const { Schema, model } = require('mongoose');

const ActionTokenSchema = new Schema({
  _user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  token: { type: String },
  tokenType: { type: String }
}, {
  timestamps: true
});

module.exports = model('Action_Token', ActionTokenSchema);
