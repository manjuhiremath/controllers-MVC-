const path = require('path');

const express = require('express');


const getAllProduct = require('../controllers/products')
const router = express.Router();

router.get('/', getAllProduct.getAllProducts);

module.exports = router;
