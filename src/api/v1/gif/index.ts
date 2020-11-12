import * as Express from "express";
import * as CircuitBreaker from "opossum";
import sendRequest from "../../../utils/sendRequest";

const GIF_API_KEY: string | any = process.env.GIF_API_KEY;
const GIF_API_URL: string | any = process.env.GIF_API_URL;
const router: Express.Router = Express.Router();
const timeout: number = 3000;
const errorThresholdPercentage: number = 50;
const resetTimeout: number = 30000;

const options = {
    timeout,
    errorThresholdPercentage,
    resetTimeout
};

const url: string = GIF_API_URL;
const method: string = "GET";

const gifSearchService = async (req: Express.Request, res: Express.Response) => {
    const {q, limit} = req.query
    const params = {
        q,
        limit,
        key: GIF_API_KEY,
    }
    // @ts-ignore
    const data = await sendRequest({url, method, params});
    return Promise.resolve(data);
}
// @ts-ignore
const breaker = new CircuitBreaker(gifSearchService, options);
breaker.fallback(() => {
    return ({fallBack: true});
});

router.get('/gifSearch', (req: Express.Request, res: Express.Response) => {
    breaker.fire(req, res)
        .then((data) => {
            // @ts-ignore
            if (data.fallBack) {
                return res.send({
                    statusTxt: 'Service temporary down..',
                    msg: 'Sorry, out of service right now.'
                });
            } else {
                return res.send({
                    statusTxt: 'ok',
                    response: {
                        ...data
                    }
                });
            }
        }).catch(() => {
            return res.send({
                statusTxt: 'Server error',
                msg: 'Oops! something went wrong. We are working on it.'
            });
        });

});

export default router;
