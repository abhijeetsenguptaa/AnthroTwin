const express = require('express');
const { userRoute } = require('./route/users.route');
const {connection} = require('./configs/connection');
const { productRoute } = require('./route/products.route');




require('dotenv').config();


const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.use('/users',userRoute);
app.use('/products',productRoute);







app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log('Connected to the Database');
    }catch(err){
        console.log('Could not connect to the Database');
    }
    console.log(`Server is running at the port : ${process.env.port}`);
})