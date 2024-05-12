export type RegisterRequest = {
  email: string;
  password: string;
  name: string;
  surname: string;
  idCard: string;
  healthCard: string;
  phone: number;
  dataConsent: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type AuthenticatedUser = {
  id: number;
  name: string;
  surname: string;
  roles: string[];
  access_token: string;
  refresh_token: string;
};
