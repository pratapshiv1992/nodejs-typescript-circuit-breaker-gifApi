import * as Express from "express";
import * as bodyParser from 'body-parser';

const router: Express.Router = Express.Router();
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

export default router;