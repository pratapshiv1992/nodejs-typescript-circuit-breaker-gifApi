import * as express from 'express';
import gifAPis from './gif';

const router = express.Router();

router.use(gifAPis);

export default router;
