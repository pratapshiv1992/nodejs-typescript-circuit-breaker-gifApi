require('dotenv').config()
import * as Express from 'express';
import apiRoutes from './api';
import middleWares from './middlewares'

const PORT: string | number = process.env.port || 4000;
const app: Express.Application = Express();
app.use(middleWares);
app.use(apiRoutes);
app.listen(PORT, () => {
    console.log(`[Server] listening on port ${PORT}`);
});

export default app;
