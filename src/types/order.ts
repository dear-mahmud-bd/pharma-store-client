import { IMedicine } from "./medicine";

export interface IOrderItem {
  medicine: IMedicine | string;
  quantity: number;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "approved"
  | "shipped"
  | "canceled"
  | "delivered";

export interface IOrder {
  _id?: string;
  user: {
    name: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  };
  items: IOrderItem[];
  prescription_img_url?: string;
  sub_total?: number;
  status?: OrderStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
