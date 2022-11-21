import express from 'express'


const app = express();

const start = () => {
    try {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`));
    } catch (e) {
        console.log(e)
    }
}
start();