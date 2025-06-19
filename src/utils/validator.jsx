//Validate with yup
import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Email is incorrect").required("Email is required"),
  name: string().min(3, "name more than 3 "),
  password: string().min(6, "Password more than 6 "),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Confirm Password incorrect"
  ),
});

export const loginSchema = object({
  email: string().email("Email is incorrect").required("Email is required"),
  password: string().min(6, "Password more than 6 "),
});