import express from 'express'
import authRouter from "./routers/authRouter";


const app = express();

const start = () => {
    try {
        app.use(express.json())
        app.use(authRouter);
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`));
    } catch (e) {
        console.log(e)
    }
}
start();