const express = require('express');

const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

// FIND
router.get('/', async(req, res) => {
  const products = await service.find();
  res.json(products);
});

// FIND ONE
router.get('/:id', async(req, res, next) => {
  try {
    const {id} = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// CREATE
router.post('/', async(req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

// UPDATE
router.patch('/:id', async(req, res, next) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  };
});

// DELETE
router.delete('/:id', async(req, res) => {
  try {
    const {id} = req.params
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

});

module.exports = router;