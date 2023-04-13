const express = require('express');
const { ProductModel } = require('../model/products.model');






const productRoute = express.Router();



productRoute.post('/',async(req,res)=>{
    const {title,image,price,category,added_on}=req.body;
    try{
        const data = new ProductModel({title,image,price,category,added_on});
        const item = await data.save();
        res.status(200).send(item);
    }catch(err){
        res.status(404).send('Something went wrong!');
    }
})


productRoute.get('/search/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await ProductModel.find({_id:id});
        res.status(200).send(data);
    }catch(err){
        res.status(404).send('Something went wrong!');
    }
})

productRoute.get('/',async(req,res)=>{
    try{
        const data = await ProductModel.find();
        res.status(200).send(data);
    }catch(err){
        res.status(404).send('Something went wrong!');
    }
})


productRoute.patch('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const update = req.body;
        const data = await ProductModel.findByIdAndUpdate({_id:id},update);
        res.status(200).send(data);
    }catch(err){
        res.status(404).send('Something went wrong!');
    }
})

productRoute.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        await ProductModel.findByIdAndDelete({_id:id});
        res.status(200).send(await ProductModel.find());
    }catch(err){
        res.status(404).send('Something went wrong!');
    }
})


module.exports = {productRoute};