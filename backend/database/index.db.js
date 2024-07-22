
import mongoose from "mongoose"
import Blog from "./blog.db.js";

async function connectDb(){
   
    await mongoose.connect(`mongodb+srv://cyb3rnaut1:372595130@cluster0.a17pzfa.mongodb.net/froker`)
     
    console.log(`Db connected`);
}




export {connectDb};


