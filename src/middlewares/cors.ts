import * as Express from "express";
import * as cors from 'cors';


const router: Express.Router = Express.Router();
router.use(
    cors({
        origin: ['http://localhost:3000'],
        optionsSuccessStatus: 200,
        credentials: true
    })
);

export default router;