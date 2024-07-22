

import express from "express";
import cors from "cors";
import mainRouter from "./routes/index.route.js"

const app = express();


app.get('/whoami',(req,res)=>{
   res.json({message: Hey});
})


app.use('api/v1',mainRouter);


app.get()