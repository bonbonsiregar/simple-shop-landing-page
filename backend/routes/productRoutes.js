import express from "express"
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import mongoose from "mongoose";

const router = express.Router()


router.get('/', expressAsyncHandler (async ( req, res) =>{
    const products = await Product.find({})
    res.json(products)
}))

router.get('/:id', expressAsyncHandler( async (req, res) =>{
    // error handling mongoose Cast to ObjectId
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
}))

export default router