import express from "express";
import cors from 'cors';
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./router/web"
require('dotenv').config()

// Make Instance 
const app = express()
const port = process.env.PORT || 3000;

app.use(cors())



configViewEngine(app)
initWebRoute(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})