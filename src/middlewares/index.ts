import * as express from 'express';
import logger from './logger';

const router = express.Router();
router.use(logger);

export default router;