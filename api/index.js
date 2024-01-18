import express from "express"
import mongoose from "mongoose";
import User from "./models/user.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";


const app = express();
app.use(express.json())
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
));
mongoose.connect(process.env.MONGODB_STRING).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(err);
})


app.get('/test', (req, res) => {
    res.send('test');
})




app.listen(3000, () => {
    console.log('server is running on port 3000');
})


app.post("/login" ,async(req,res) =>{
    const {userId , password} = req.body
    const user = await User.findOne({userId})
    if (!user) {
        return res.status(404).send("User not found");
    }
    if (user.password !== password) {
        return res.status(401).send("Incorrect password");
    }
    res.json({
        success :true,
        message:"Login successful",
        user
    });

    
})

app.post("/register" ,async(req,res) =>{
    console.log(req.body)
    const {userId , password} = req.body
    const user = await User.create({userId,password})
    res.json(user);
    
})
