const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  pictureUrl: String,
  status:{type:String,enum:['active','disable'], default:'active'},
  event: { type: Schema.Types.ObjectId, ref: 'Event' }

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
