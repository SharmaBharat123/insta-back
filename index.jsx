const express =require('express')
const bodyParser =require('body-parser')
const cors =require('cors')
const mongoose =require('mongoose')
const postRoutes = require('./routes/routes.jsx')
const {User} = require("./model/model.jsx")
const app =express();

const uri = `mongodb+srv://Bharat:Sharma@cluster0.rtqrgi5.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery', true)
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log('Database connected Succesfully'))
.catch((error)=> console.log(error.message));



app.post("/user", async(req,resp)=>{
    const {postImage, author, location, description,date} = req.body
    const userObject = new User({
        postImage,
        author,
        location,
        description,
        date
    })
    const response = await userObject.create()
    resp.json({message:response})
})



app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/api/v1/posts",postRoutes )




const CONNECTION_URL = 'mongodb://localhost:27017/instaclone';
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(`Server running on port :${PORT}`)})


