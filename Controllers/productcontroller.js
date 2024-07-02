const ProductModel = require('../Models/product')





const createProduct = async(req,res)=>{
    const {name,price,color}=req.body


    if(!name || !price || !color){
        res.status(400).json('fields cannot be empty')
    }

    const createdProduct = await ProductModel.craete({
        name:name,
        price:price,
        color:color
    })

    if(createdProduct){
        const{name,price,color}=createdProduct
        res.status(201).json(
            {
                name,
                price,
                color
            }
        )
    }else{
        res.status(400).json('error while creating product')
    }
}







module.exports = {createProduct}