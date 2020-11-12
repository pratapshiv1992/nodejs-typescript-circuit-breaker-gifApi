import * as Express from "express";

const router: Express.Router = Express.Router();

router.get('/gifSearch', (req: Express.Request, res: Express.Response) => {
    return res.send('dummy gifSearch API response.');
});

export default router;
