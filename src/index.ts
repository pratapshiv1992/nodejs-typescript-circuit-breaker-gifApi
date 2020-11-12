require('dotenv').config()
import * as express from 'express';
import * as cors from 'cors';
import apiRoutes from './api';
import middleWares from './middlewares'

const app = express();
const port = process.env.port || 4000;
app.use(middleWares);

app.use(
    cors({
        origin: ['http://localhost:3000'],
        optionsSuccessStatus: 200,
        credentials: true
    })
);

app.use(apiRoutes);
app.listen(port, () => {
    console.log(`[Server] listening on port ${port}`);
});

export default app;
