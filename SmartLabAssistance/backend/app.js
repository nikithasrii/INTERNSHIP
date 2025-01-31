// const login = require('./models/login');
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");

// app.use(bodyParser.json());
// app.use(cors());
// // BPNrAxfALlzQVhIa
// mongoose.connect("mongodb+srv://21a91a04i5:fMVeLvXmiwZvx6M4@cluster0.nibm6qq.mongodb.net/Lab?retryWrites=true&w=majority&appName=Cluster0")
//   .then(() => {
//     app.post('/api/addusers', async (req, res) => {
//       const { email, password } = req.body;
//       const user = new login({
//         email,
//         password
//       });
      
//       try {
//         await user.save();
//         return res.status(201).send({ msg: "Inserted", result: user });
//       } catch (err) {
//         console.log(err);
//         return res.status(500).send({ error: "An error occurred while saving user data" });
//       }
//     });

//     app.listen(4444, () => {
//       console.log("Connected to Database & Listening to localhost 4444");
//     });
//   })
//   .catch((err) => {
//     console.error("Error connecting to the database:", err);
//   });


// import express from 'express';
// import mongoose from 'mongoose'; 
// import bodyParser from 'body-parser';
// import cors from "cors"; 
// import multer from 'multer';
// import register from './models/Register.js';

// import express from 'express';
const express = require('express');
 const mongoose = require('mongoose');
// import mongoose from 'mongoose'; 
// const app = express();
 const cors = require("cors");
 const bodyParser = require("body-parser");
// import bodyParser from 'body-parser';
// import cors from "cors"; 
// import multer from 'multer';
const Register = require("./models/Register.js");
// import boot from './models/boot.js';
// const Router = require("./src/routes/userRoutes.js")
// // import Router from  "./router/logroute.js";
const app = express();//express for creating route paths.it will worth
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

// mongoose.connect()
mongoose.connect("mongodb+srv://21a91a04i5:fMVeLvXmiwZvx6M4@cluster0.nibm6qq.mongodb.net/Lab?retryWrites=true&w=majority&appName=Cluster0")
.then(() => app.listen(4444))
.then(() =>console.log("Connected to Database & Listining to localhost 5555")
)
.catch((err) => console.log(err));


// app.use('/',Router)

app.post('/api/addusers',(req,res,next)=>{
    console.log(req.body.data)
    const {fullname,lastname,email,password,confirmPassword}=req.body.data;
    const user=new Register({
        fullname,
        lastname,
        email,
        password,
        confirmPassword
        
    })  
    try{
        user.save()
    }catch{
        console.log(err);
    }
    return res.send({msg:'inserted',result:user})
})


app.get('/api/getusers',async(req,res,next)=>{
    try{
       registerdata = await Register.find()
    }
    catch(err){
       console.log(err)
    }
    if(!registerdata){
       console.log("no data found")
    }
    // res.send("success")
    return res.status(201).json({registerdata})
  
  })


