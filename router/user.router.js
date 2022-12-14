const router = require('express').Router();

const controller = require("../controller/user.controller");
const mdlwr = require("../middleware/user.middleware");
const authMdlwr = require("../middleware/auth.middleware");
const { checkUploadImage } = require("../middleware/file.middleware");

router.get('/', controller.getAllUsers);
router.post('/', mdlwr.isNewUserValid, mdlwr.checkIsEmailUnique, controller.createUser);

router.get(
  '/:userId',
  mdlwr.isUserIdValid,
  // authMdlwr.checkAccessToken,
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

router.patch(
  '/:userId/avatar',
  checkUploadImage,
  mdlwr.isUserIdValid,
  mdlwr.getUserDynamically('userId', 'params', '_id'),
  controller.uploadAvatar
);

module.exports = router;
