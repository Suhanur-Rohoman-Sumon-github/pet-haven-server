import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespone';
import { TUser } from './user.interface';
import { userServices } from './user.services';

const createUser = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const data = await userServices.createUser(userInfo);
  sendResponse<TUser>(res, {
    success: true,
    statusCode: 200,
    message: 'User created successfull',
    data,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const data = await userServices.getAllUser();

  sendResponse<TUser[]>(res, {
    success: true,
    statusCode: 200,
    message: 'Users retrieved successfully',
    data,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const userInfo = req.body as Partial<TUser>;
  const data = await userServices.updateUser(userId, userInfo);

  sendResponse<TUser | null>(res, {
    success: !!data,
    statusCode: data ? 200 : 404,
    message: data ? 'User updated successfully' : 'User not found',
    data,
  });
});
export const userControler = { createUser, getAllUsers, updateUser };
