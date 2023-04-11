const express = require('express');




require('dotenv').config();


const app = express();
app.use(express.json());












app.listen(process.env.port,async()=>{
    try{
        console.log('Connected to the Database');
    }catch(err){
        console.log('Could not connect to the Database');
    }
    console.log(`Server is running at the port : ${process.env.port}`);
})