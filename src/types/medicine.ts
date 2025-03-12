export interface IMedicine {
  _id?: string;
  name: string;
  manufacturer: {
    name: string;
    address: string;
    contact: string;
  };
  medi_image: string;
  description: string;
  price: number;
  stock: number;
  requiresPrescription: boolean;
  expiryDate: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
