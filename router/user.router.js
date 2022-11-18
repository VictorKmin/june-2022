const router = require('express').Router();

const controller = require("../controller/user.controller");
const mdlwr = require("../middleware/user.middleware");

router.get('/', controller.getAllUsers);

router.get('/:userId', mdlwr.checkIsUserExist, controller.getUserById);

router.put('/:userId', mdlwr.checkIsUserExist, controller.updateUser);

module.exports = router;
