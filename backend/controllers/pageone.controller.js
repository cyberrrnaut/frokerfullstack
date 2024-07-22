import express from 'express';
import { connectDb } from '../database/index.db.js';
import Blog from '../database/blog.db.js';
import mongoose from 'mongoose';



const router = express.Router();


const pageonedata = [
    {
        id: 1,
        title: "Title: Mastering the Art of Co...",
        image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707379910/Frokerassets/blog5creator_wpwvki.png",
        author: "by Varshita",
        date: "9 Feb 2024",
        description: "Introduction: Welcome to the dynamic world of content creation, where creativity...",
    },
    {
        id: 2,
        title: "What Is Content Creation, Anyw...",
        image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709878252/cc5_cye3u1.png",
        author: "by Varshita",
        date: "3 March 2024",
        description: "So, you've heard the buzz about content creation. ...",
    },
    {
        id: 3,
        title: "Forbes 30 Under 30 India: Cele...",
        image: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png",
        author: "by Varshita",
        date: "3 March 2024",
        description: "Unconventional Geniuses, Fearless Entrepreneurs, a...",
    }
];



async function insertData(){
   
    try{
        connectDb();

        await Blog.insertMany( pageonedata);

        console.log(`data inserted succesfully`);
        mongoose.connection.close();

    }catch(err){
        console.log(err);
    }

} 

//insertData();

router.get('/', async(req, res) => {
   
    try{
     
        const blogs = await Blog.find({id: { $in: [1,2,3]}});

        console.log(blogs);

        res.json(blogs);


    }catch(err){
      console.log(err);
    }
});

export default router;
