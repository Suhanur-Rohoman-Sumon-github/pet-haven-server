import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { userValidations } from './user.validation';
import { userControler } from './user.controlar';
const router = express.Router();

router.post(
  '/',
  validateRequest(userValidations.createUserValidation),
  userControler.createUser,
);
router.get('/', userControler.getAllUsers);
router.patch(
  '/:userId',
  validateRequest(userValidations.updateUserValidation),
  userControler.updateUser,
);

export const userRouter = router;
