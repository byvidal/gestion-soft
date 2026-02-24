import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema(
    {
        subjectname: {
            type: String,
            required: true,
        },
        key: {
            type: String,
            required: true,
            unique: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Subject", subjectSchema);