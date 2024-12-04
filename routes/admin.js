const path = require('path');
const express = require('express');
const router = express.Router();
const getAllProducts = require('../controllers/products')

// /admin/add-product => GET

router.get('/add-product',getAllProducts.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',getAllProducts.postAllProduct);

module.exports = router;
