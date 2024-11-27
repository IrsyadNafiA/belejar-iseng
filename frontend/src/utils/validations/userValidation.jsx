import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  username: Yup.string().required("Username is required").min(5).max(20),
  displayName: Yup.string().required("Display Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8)
    .max(32)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/,
      "Password must contain at least one letter and one number"
    ),
  role: Yup.string().required("Role is required"),
});

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username harus diisi!"),
  password: Yup.string().required("Password harus diisi!"),
});

export { registerSchema, loginSchema };
