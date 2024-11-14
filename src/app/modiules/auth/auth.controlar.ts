import { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespone';

import { authServices } from './auth.services';

const login = catchAsync(async (req, res) => {
  const data = await authServices.login(req.body);
  sendResponse<JwtPayload>(res, {
    success: true,
    message: 'User login successfull',
    statusCode: 200,
    data,
  });
});

export const authControler = { login };
