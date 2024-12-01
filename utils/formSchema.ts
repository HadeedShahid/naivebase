import { z } from "zod";

export const waitlistFormSchema = z.object({
  name: z.string().min(1, { message: "Enter your name" }),
  email: z.string().min(1, { message: "Enter your email" }),
  platforms: z
    .array(z.string())
    .min(1, { message: "Select at least one platform" }),
  industry: z.string().min(1, { message: "Select at least one industry" }),
  country: z.string().min(1, { message: "Select your country" }),
});
