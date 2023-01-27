const express = require('express');

const { createPost, getPost } = require('../controller/controller.jsx')

const router = express.Router()


//Create a Posts
router.post("/addpost", createPost)

//Get all Posts
router.get("/",getPost)



module.exports = router;