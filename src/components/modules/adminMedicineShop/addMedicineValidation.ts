import { z } from "zod";

export const addMedicineValidationScema = z.object({
  name: z
    .string({ required_error: "Medicine name is required" })
    .trim()
    .min(3, "Name must be at least 3 characters long.")
    .max(100, "Name cannot exceed 100 characters."),
  medi_image: z
    .string({ required_error: "Medicine image URL is required" })
    .trim()
    .url("Invalid image URL format")
    .refine((url) => /\.(jpeg|jpg|png|gif|bmp|webp)$/i.test(url), {
      message:
        "Image must have a valid file extension (e.g., .jpg, .png, .webp). For testing, \n 'https://i.ibb.co.com/hFYKj5fG/medicine.jpg'",
    }),
  description: z
    .string({ required_error: "Description is required" })
    .trim()
    .min(10, "Description must be at least 10 characters long."),
  category: z
    .string({ required_error: "Category is required" })
    .trim()
    .min(1, "Category is required"),
  price: z
    .number({ required_error: "Price is required" })
    .min(1, "Price must be at least 1"),
  stock: z
    .number({ required_error: "Stock is required" })
    .min(1, "Stock must be at least 1"),
  requiresPrescription: z.boolean({
    required_error: "Prescription requirement must be specified",
  }),
  manufacturer: z.object({
    name: z
      .string({ required_error: "Manufacturer name is required" })
      .trim()
      .min(2, "Manufacturer name must be at least 2 characters long."),
    address: z
      .string({ required_error: "Manufacturer address is required" })
      .trim()
      .min(5, "Address must be at least 5 characters long."),
    contact: z
      .string({ required_error: "Manufacturer contact is required" })
      .trim()
      .min(5, "Contact must be at least 5 characters long."),
  }),
  expiryDate: z
    .string({ required_error: "Expiry date is required" })
    .refine((date) => !isNaN(Date.parse(date)), "Invalid expiry date format"),
});
