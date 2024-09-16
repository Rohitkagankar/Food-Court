import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";



//app config
const port=4000;
const app=express();

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);  
})

//mongodb+srv://rohitkagankar:<db_password>@cluster0.3dzrg.mongodb.net/?