import * as express from 'express';

const router = express.Router();

router.get('/gifSearch', (req, res) => {
    return res.send('dummy gifSearch API response.');
});

export default router;
