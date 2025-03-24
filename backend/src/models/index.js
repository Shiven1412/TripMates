import mongoose from 'mongoose';

const tripmateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    travelDate: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Tripmate = mongoose.model('Tripmate', tripmateSchema);

export default Tripmate;