const router = require('express').Router();

const controller = require("../controller/user.controller");
const mdlwr = require("../middleware/user.middleware");

router.get('/', controller.getAllUsers);

router.post(
    '/',
    mdlwr.isBodyValidCreate,
    controller.create
);

router.get(
    '/:userId',
    mdlwr.isIdValid,
    mdlwr.checkIsUserExist,
    controller.getUserById
);

router.put(
    '/:userId',
    mdlwr.isIdValid,
    mdlwr.isBodyValidUpdate,
    mdlwr.checkIsUserExist,
    controller.updateUser
);

router.delete(
    '/:userId',
    mdlwr.isIdValid,
    mdlwr.checkIsUserExist,
    controller.deleteUser
);

module.exports = router;
