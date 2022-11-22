import express from 'express'
import router from "./routers/router";
import config from "./config";
import addCORS from "./middlewares/addCORS";


const app = express();

const start = () => {
    try {
        app.use(express.json());
        app.use(addCORS);
        app.use(router);
        const port = config.server.port;
        app.listen(port, ()=>console.log(`http://localhost:${port}`));
    } catch (e) {
        console.log(e)
    }
}
start();