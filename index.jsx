const express =require('express')
const bodyParser =require('body-parser')
const cors =require('cors')
const mongoose =require('mongoose')
const postRoutes = require('./routes/routes.jsx')
//const {User, Post} = require("./model/model.jsx")
const app =express();


const uri = `mongodb+srv://Bharat:<Bharat>@cluster0.nv6ongt.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery', true)
mongoose.connect(uri,(err)=>{
    if(err){
        console.log("Connection to mongodb failed")
    }
    else{
        console.log("Connected to mongodb successfully")
    }
})


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/api/v1/posts",postRoutes )




const CONNECTION_URL = 'mongodb://localhost:27017/instaclone';
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(`Server running on port :${PORT}`)})


