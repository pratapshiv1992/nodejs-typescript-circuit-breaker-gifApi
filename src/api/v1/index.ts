import * as Express from "express";
import gifAPis from './gif';

const router: Express.Router = Express.Router();

router.use(gifAPis);

export default router;
