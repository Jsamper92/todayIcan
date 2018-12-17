const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    description: String,
    city: String,
    address: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});



const Events = mongoose.model('Event', eventSchema);
module.exports = Events;