import express from 'express'
import dotenv from 'dotenv'
import connectDB from './backend/config/db.js'
import productRoutes from './backend/routes/productRoutes.js'
import { errorHandle, notFound } from './backend/middleware/errorMiddleware.js'

dotenv.config()

connectDB

const app = express()

app.get('/', (req, res) =>{
    res.send('API is Running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)


// error handling
app.use(errorHandle)

const PORT = process.env.PORT || 5000

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))