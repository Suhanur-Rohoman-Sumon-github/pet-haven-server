import { Router } from 'express';
import { userRouter } from '../modiules/user/user.routes';
import { authRouter } from '../modiules/auth/auth.route';
import { productRouter } from '../modiules/product/product.route';

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
  {
    path: '/products',
    route: productRouter,
  },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
