export interface IUser {
  userId: string;
  name: string;
  email: string;
  isActive?: boolean;
  role: "customer" | "admin";
  iat?: number;
  exp?: number;
}
