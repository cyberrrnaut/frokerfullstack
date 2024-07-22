import express from 'express';
import cors from 'cors';
import mainRouter from './routes/index.route.js';
import { connectDb } from './database/index.db.js';


const app = express();
connectDb();


app.use(cors());
app.use(express.json());

app.get('/whoami', (req, res) => {
   res.json({ message: 'Hey' });
});

app.use('/api/v1', mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
