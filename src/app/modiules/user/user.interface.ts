export type TUser = {
  name: string;
  image: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  isDeleted: boolean;
  status: 'active' | 'blocked';
};
