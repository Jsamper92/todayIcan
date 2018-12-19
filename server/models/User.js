const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  pictureUrl: String,
  confirmationCode: {
    type: String,
    enum: ['Pending Confirmation', 'Active'],
    default: 'Pending Confirmation'
  },
  event: { type: Schema.Types.ObjectId, ref: 'Event' }

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
