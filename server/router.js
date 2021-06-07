const router = require('express').Router();
const atelier = require('../helpers/atelier.js');

router.get('/products', atelier.getProducts);
router.get('/reviews/:id/:page/:count/:sort', atelier.getReviews);

module.exports = router;
