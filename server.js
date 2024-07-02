//  console.log('hello server');
//  var os = require('os')
// // console.log(os.version());
// var HTTP = require('http') 
// const PORT = 7000
// // console.log(HTTP);
// const server =HTTP.createServer((req,res)=>{

//     console.log(req.url);
//     res.setHeader('content','html')
//     if(req.url === '/login'){
//         res.end('<h2>This login Route</h2>')
//     }
//     else if(req.url ==='/'){
//         res.end('<h1>Server Home Page</h1>')
//     }
   
//     })

// server.listen(PORT,()=>{
//     console.log(`server is now running on port : ${PORT}`);
// })


var express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const productRoute = require('./productRoutes')






app.get('/', (req,res)=>{
    res.send('server home page')
})
app.use(`/`,productRoute)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(8000,()=>{ 
        console.log('SERVER NOW LISTENING TO PORT 8000');
    
    })
}).catch((error) =>{
    console.log(error);
})






  

// mongodb+srv://momoduibrahim82:Myqmv4E3b4OGMADK@cluster0.lzyl2yl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
