import express from "express";
import Blog from "../database/blog.db.js";
import { connectDb } from "../database/index.db.js";
import mongoose from "mongoose";

const router = express.Router();

const restData = [
  {
      id: 4,
      title: "Delegating Social Media Tasks ...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1714712971/Screenshot_2024-05-03_103708_dx4yto.png",
      author: "by Varshita",
      date: "9 Feb 2024",
      description: "In today's digital age, maintaining a vibrant social media presence is crucial for businesses and individuals alike. However, the demands of crafting ...",
  },
  {
      id: 5,
      title: "What Is Content Creation, Anyw...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711723862/robo1_ewko6u.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "So, you've heard the buzz about content creation. ...",
  },
  {
      id: 6,
      title: "Forbes 30 Under 30 India: Cele...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1714713623/Screenshot_2024-05-03_104922_kmynzb.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
  },
  {
      id: 7,
      title: "Forbes 30 Under 30 India: Cele...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1710746278/ression5_vwypjj.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
  },
  {
      id: 8,
      title: "Forbes 30 Under 30 India: Cele...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1710746278/ression5_vwypjj.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
  },
  {
      id: 9,
      title: "Forbes 30 Under 30 India: Cele...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1713597754/meta_bbe7zn.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
  },
  {
      id: 10,
      title: "Forbes 30 Under 30 India: Cele...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
  },
  {
      id: 11,
      title: "Forbes 30 Under 30 India: Cele...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1712988897/driedlake_fwsv41.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
  },
  {
      id: 12,
      title: "Forbes 30 Under 30 India: Cele...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
  },
  {
      id: 13,
      title: "Forbes 30 Under 30 India: Cele...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1712410573/skin1_q6n7ar.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
  },
  {
      id: 14,
      title: "Forbes 30 Under 30 India: Cele...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
  },
  {
      id: 15,
      title: "Forbes 30 Under 30 India: Cele...",
      image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1713875886/Screenshot_2024-04-23_180054_kgdlcs.png",
      author: "by Varshita",
      date: "3 March 2024",
      description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
  }
];



async function insertData(){
   
  try{
      connectDb();

      await Blog.insertMany( restData);

      console.log(`data inserted succesfully`);
      mongoose.connection.close();

  }catch(err){
      console.log(err);
  }

} 

//insertData();


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


