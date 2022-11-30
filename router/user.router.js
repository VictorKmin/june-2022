const router = require('express').Router();

const { userController } = require("../controller");
const mdlwr = require("../middleware/user.middleware");

router.get('/', userController.getAllUsers);
router.post('/', mdlwr.isBodyValidCreate, mdlwr.userNormalizator, mdlwr.checkIsEmailUnique, userController.createUser);

router.get('/:userId', mdlwr.checkIsUserExist, userController.getUserById);
router.put('/:userId', mdlwr.isBodyValidUpdate, mdlwr.userNormalizator, mdlwr.checkIsUserExist, userController.updateUser);
router.delete('/:userId', userController.deleteUserById);

module.exports = router;
