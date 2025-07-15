type LoginResponse = {
  message: string;
  token: string;
  user: {
    username: string;
    name?: string;
    phone?: string;
    gender?: string;
    address?: string;
    dateOfBirth?: string;
    admin?: boolean;
  };
};

type ErrorResponse = { error: string };

type TokenPayload = {
  id: number;
  username: string;
  name: string;
  phone: string;
  gender: string;
  address: string;
  dateOfBirth: string;
  admin: boolean;
};
