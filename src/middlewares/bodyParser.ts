import * as express from 'express';
import * as bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

export default router;