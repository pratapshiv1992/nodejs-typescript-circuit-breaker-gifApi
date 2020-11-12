import * as express from 'express';
import logger from './logger';
import cors from './cors';
import bodyParser from './bodyParser';


const router = express.Router();
router.use(logger);
router.use(cors);
router.use(bodyParser);

export default router;