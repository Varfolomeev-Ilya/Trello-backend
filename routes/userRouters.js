const express = require('express');
const controllers = require('../controllers/userControllers');
const userRouter = express.Router();
const { tokenChecker } = require('../middleware/updateToken');
const { uploadFile, storageConfig, fileFilter } = require('../middleware/loadingAvatar');
const multer = require('multer');

userRouter.get('/user/me', controllers.getOneUser);
userRouter.delete('/delete/:id', controllers.deleteUser);
userRouter.patch('/account', controllers.updateUser);
userRouter.use(multer({storage:storageConfig, filter:fileFilter}).single('filedata'));
userRouter.post('/account', controllers.uploadFile);

module.exports = userRouter;




