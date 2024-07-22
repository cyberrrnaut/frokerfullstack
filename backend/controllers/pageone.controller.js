import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Page one controller');
});

export default router;
