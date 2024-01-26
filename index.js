import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config()
const PORT =process.env.PORT || 8000 
const app = express();

app.get('/ping',(req,res)=>{
    res.status(200).send('pong  {{ Welcome CodewithCoderBuddy - API }}')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})