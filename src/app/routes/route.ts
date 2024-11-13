import { Router } from 'express';
import { userRouter } from '../modiules/user/user.routes';
import { authRouter } from '../modiules/auth/auth.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/users',
    route: userRouter,
  },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
