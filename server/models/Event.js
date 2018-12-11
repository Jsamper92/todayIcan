const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    description: String,
    location: { latitude: Number, longitude: Number },
    city: String,
    address: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});



const Evento = mongoose.model('Event', eventSchema);
module.exports = Evento;