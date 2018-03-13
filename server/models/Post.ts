import { Schema, model } from "mongoose";

let PostSchema: Schema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        required: true
    },
    content: {
        type: String,
        default: '',
        required: true
    },
    slug: {
        type: String,
        default: '',
        required: true,
        unique: true
    },
    featuredImage: {
        type: String,
        default: ''
    }
});


export default model('Post', PostSchema);