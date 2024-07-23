import express from "express";
import Blog from "../database/blog.db.js";
import mongoose from "mongoose";

const router = express.Router();

router.put("/", async (req, res) => {
  const id = req.query.id;
  const { liked } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Not a valid ID" });
  }

  try {
    const blog = await Blog.findOne({ id: parseInt(id) });
    
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const isLiked = blog.liked;
    let likeCountChange = 0;

    if (liked !== isLiked) {
      likeCountChange = liked ? 1 : -1;
    } else {
      return res.json({ message: "No change" });
    }

    await Blog.updateOne(
      { id: parseInt(id) },
      {
        $set: { liked: liked },
        $inc: { likeCount: likeCountChange }
      }
    );

    res.json({ message: "Blog updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;




















