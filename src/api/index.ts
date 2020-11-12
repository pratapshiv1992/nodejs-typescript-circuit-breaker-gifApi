import * as express from 'express';
import v1APIRoutes from './v1';

const router = express.Router();
router.use('/v1', v1APIRoutes);

export default router;
