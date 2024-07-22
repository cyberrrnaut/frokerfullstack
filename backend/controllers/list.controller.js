import express from "express";
import Blog from "../database/blog.db.js";

const router = express.Router();

router.get('/', async (req, res) => {   // api/v1/list?id=3
  const id = req.query.id;

  try {
    if (!id) {
      const blogs = await Blog.find({});
      return res.json(blogs);
    } 

      const blog = await Blog.find({id:id});

      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      return res.json(blog);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



export default router;


