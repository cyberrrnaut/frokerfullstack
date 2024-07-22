import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
});

const Blog = mongoose.model('Blog', blogSchema);  // will become blogs

export default Blog;
