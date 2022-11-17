import express from "express";
import cors from 'cors';
import configViewEngine from "./configs/viewEngine";

// Make Instance 
const app = express()
const port = 3001

app.use(cors())
configViewEngine(app)
app.get('/', (req, res) => {
  // res.send('Hello World')
  res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})