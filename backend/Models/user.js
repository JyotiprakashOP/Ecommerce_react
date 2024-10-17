import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Declare userModel only once
const userModel = mongoose.model('User', userSchema);

// Export using default export
export default userModel;
