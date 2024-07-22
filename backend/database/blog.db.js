import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    liked: { type: Boolean, default: false },
    likeCount: { type: Number, default: 0 }
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
