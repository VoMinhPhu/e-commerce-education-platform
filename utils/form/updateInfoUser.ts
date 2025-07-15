import { z } from "zod";

export type FormUpdateUserInfoType = z.infer<typeof formUpdateUserInfo>;

export const formUpdateUserInfo = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  phone: z.string().regex(/^[0-9]{10,11}$/, "Phone must be 10-11 digits"),
  gender: z.string(),
  address: z.string().min(1, "Address is required"),
  dateOfBirth: z.string(),
});
