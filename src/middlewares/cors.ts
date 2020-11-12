import * as express from 'express';
import * as cors from 'cors';

const router = express.Router();
router.use(
    cors({
        origin: ['http://localhost:3000'],
        optionsSuccessStatus: 200,
        credentials: true
    })
);

export default router;