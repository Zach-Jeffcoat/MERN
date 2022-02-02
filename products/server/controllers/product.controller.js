const Product = require("../models/product.model.js")
module.exports = {
    createProduct: (req, res)=>{
        Product.create(req.body)
            .then((newProduct)=>{
                res.json(newProduct);
            })
            .catch((err)=>console.log(err));
},

getAllProducts: (req,res)=>{
    Product.find()
        .then((allProducts)=>res.json(allProducts))
        .catch((err)=>(err))
},
getOneProduct: (req,res) =>{
    Product.findOne({_id: req.params.id})
        .then((oneProduct)=>res.json(oneProduct))
        .catch((err)=>console.log(err))
},
deleteProduct: (req,res) =>{
    Product.deleteOne({_id: req.params.id})
        .then((deletedProduct)=>res,json(deletedProduct))
        .catch((err)=>console.log(err))
},
updateProduct: (req,res) =>{
    Product.findByIdAndUpdate({id: req.params.id}),
        req.body, 
        {
        new: true,
        runValidators: true
        }
            .then((editedProduct)=>res,json(editedProduct))
            .catch((err)=>console.log(err))
    }}