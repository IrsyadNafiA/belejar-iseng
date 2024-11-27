import axios from "axios";
// import { useState } from "react";
import { FormControlInput } from "../../components/Form/FormControl";
import { useFormik } from "formik";
import AlertComponent from "../../components/SweetAlert/AlertComponent";
import { loginSchema } from "../../utils/validations/userValidation";

const Login = () => {
  const loginUser = async () => {
    if (formik.isValid) {
      try {
        await axios.post("http://localhost:3000/api/login", formik.values, {
          withCredentials: true,
        });
        AlertComponent.success(
          "Login Berhasil!",
          "Anda akan diarahkan ke dashboard."
        );
        // Arahkan ke halaman dashboard setelah delay
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      } catch (error) {
        // Tampilkan notifikasi error
        AlertComponent.error(
          "Login Gagal!",
          error.response?.data?.message || "Terjadi kesalahan saat login."
        );
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: loginUser,
    validationSchema: loginSchema,
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   formik.setFieldValue(name, value);
  // };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-4 bg-black">
        <h1 className="text-2xl font-bold text-white mb-4">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <FormControlInput label="username" type="text" formik={formik} />
          <FormControlInput label="password" type="password" formik={formik} />
          <button
            type="submit"
            className="w-full p-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
