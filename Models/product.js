const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is compulsory']
    },
    price:{
        type:String,
        required:[true,'price is compulsory']
    },
    color:{
        type:String,
        required:[true,'color is required'],
        default:"as seen in the picture"

    }

})
    const ProductModel = mongoose.model("product",productSchema)


    module.exports = ProductModel