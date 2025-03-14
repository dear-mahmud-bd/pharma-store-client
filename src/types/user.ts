export interface IUser {
  userId: string;
  name: string;
  email: string;
  isActive?: boolean;
  role: "customer" | "admin";
  iat?: number;
  exp?: number;
}

export enum UserType {
  customer = "customer",
  admin = "admin",
}
export interface IProfile {
  _id: string;
  name: string;
  email: string;
  image_url?: string;
  role: UserType;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  isVerified: boolean;
  isBlocked: boolean;
  passwordChangedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
