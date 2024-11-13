import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { authValidaion } from './auth.validation';
import { authControler } from './auth.controlar';

const router = express.Router();

router.post(
  '/login',
  validateRequest(authValidaion.login),
  authControler.login,
);

export const authRouter = router;
