import * as express from 'express';
import * as morgan from 'morgan';

const router = express.Router();
router.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

export default router;