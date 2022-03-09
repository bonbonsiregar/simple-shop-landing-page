//const express = require('express')
import express from 'express'
//const dotenv = require('dotenv')
import dotenv from 'dotenv'
//const products = require('./backend/data/products')
import products from './backend/data/products.js'

import connectDB from './backend/config/db.js'

dotenv.config()

connectDB

const app = express()

app.get('/', (req, res) =>{
    res.send('API is Running...')
})

app.get('/api/products', (req, res) =>{
    res.json(products)
})

app.get('/api/products/:id', (req, res) =>{
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))