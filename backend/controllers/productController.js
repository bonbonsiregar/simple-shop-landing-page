import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import mongoose from "mongoose";

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
    if( !mongoose.isValidObjectId(req.params.id) ) {
        return res.status(404).json({message: `Product with id of ${req.params.id} is not found`});
      }

    const product = await Product.findById(req.params.id).exec()

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error("Product not found")
    }
})

export {
    getProducts,
    getProductById
}