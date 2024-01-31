import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import connectDb from './db/config.js'
import authRouter from './routes/auth.js'

dotenv.config()

// database
connectDb()
const PORT =process.env.PORT || 8000 
const app = express();
app.use(cors())
app.use(express.json())

app.get('/ping',(req,res)=>{
    res.status(200).send('<h1>Pong</h1>  {{ Welcome DocswithCoderBuddy - API }}')
})

app.use('/api/v1/user',authRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})