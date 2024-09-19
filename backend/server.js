import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'



//app config
const port=process.env.PORT;
const app=express();

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.use("/images",express.static('uploads'))

app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);  
})

