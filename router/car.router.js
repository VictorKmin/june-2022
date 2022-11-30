const router = require('express').Router();

const { carController } = require("../controller");

router.get('/', carController.getAllCars);
router.post('/', carController.createCar);

router.get('/:carId', carController.findOne);

module.exports = router;
