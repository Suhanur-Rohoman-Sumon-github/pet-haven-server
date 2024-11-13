import { TUser } from './user.interface';
import User from './user.model';

const createUser = async (userInfo: TUser) => {
  const result = await User.create(userInfo);
  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

const updateUser = async (id: string, userInfo: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, userInfo, { new: true });
  return result;
};

export const userServices = { createUser, getAllUser, updateUser };
