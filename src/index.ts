require('dotenv').config()
import * as express from 'express';
import apiRoutes from './api';
import middleWares from './middlewares'

const port = process.env.port || 4000;
const app = express();
app.use(middleWares);
app.use(apiRoutes);
app.listen(port, () => {
    console.log(`[Server] listening on port ${port}`);
});

export default app;
