import * as Express from "express";
import v1APIRoutes from './v1';


const router: Express.Router = Express.Router();
router.use('/v1', v1APIRoutes);

export default router;
