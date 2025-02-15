// const express = require('express');
import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'
dotenv.config()
connectDB()
const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// routes

app.use("/api/v1/product", productRoutes)
app.get('/', (req, res) =>{
    res.send('<h1>Welcome</h1>')
})
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})
