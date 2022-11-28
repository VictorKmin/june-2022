const router = require('express').Router();

const controller = require("../controller/user.controller");
const mdlwr = require("../middleware/user.middleware");
const authMdlwr = require("../middleware/auth.middleware");

router.get('/', controller.getAllUsers);
router.post('/', mdlwr.isNewUserValid, mdlwr.checkIsEmailUnique, controller.createUser);

router.get(
  '/:userId',
  mdlwr.isUserIdValid,
  authMdlwr.checkAccessToken,
  mdlwr.getUserDynamically('userId', 'params', '_id'),
  controller.getUserById
);
router.put(
  '/:userId',
  mdlwr.isUserIdValid,
  mdlwr.isEditUserValid,
  authMdlwr.checkAccessToken,
  mdlwr.getUserDynamically('userId', 'params', '_id'),
  controller.updateUser
);
router.delete(
    '/:userId',
    mdlwr.isUserIdValid,
    authMdlwr.checkAccessToken,
    controller.deleteUserById
);

module.exports = router;
