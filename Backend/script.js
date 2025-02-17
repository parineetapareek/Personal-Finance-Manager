import express from 'express';
import mongoose from 'mongoose';

const app = express()
const port = 3000

mongoose
    .connect("mongodb://localhost:27017/FinAge")
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.error(err);
    });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})