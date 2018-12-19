const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planConfirmationSchema = new Schema({
    status: {
        type: String,
        enum: ['Accept', 'Pendient']
    },
      event: { type: Schema.Types.ObjectId, ref: 'Event' },
      user: { type:Schema.Types.ObjectId, ref: 'User'}

    

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const PlanConfirmation = mongoose.model('PlanConfirmation', planConfirmationSchema);
module.exports = PlanConfirmation;