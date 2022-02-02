const mongoose= require("mongoose");
const ProductSchema =  new mongoose.schema({
title: {
    type: string
},
price:{
    type: number
},
description: {
    type: String
}

}, (timestamps=true))

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;