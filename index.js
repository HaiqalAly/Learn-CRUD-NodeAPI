const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/product.model.js')
const port = 3000

require('dotenv').config();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World! This is my first API')
})

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(201).json(products)
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.status(201).json(product)
    } else {
      res.status(404).json({ message: 'Product Not Found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
})



app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
})


mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB')
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
.catch(() => {
  console.log('Error connecting to MongoDB')
});