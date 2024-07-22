

import express from "express";
import cors from "cors";
import mainRouter from "./routes/index.route.js"

const app = express();

app.arguments('api/v1',mainRouter);


app.get()