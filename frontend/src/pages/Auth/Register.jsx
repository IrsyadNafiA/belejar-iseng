import axios from "axios";
import { FormControlInput } from "../../components/Form/FormControl";
import { useFormik } from "formik";
import { registerSchema } from "../../utils/validations/userValidation";
import AlertComponent from "../../components/SweetAlert/AlertComponent";

const Register = () => {
  const registerUser = async () => {
    if (formik.values.role === "default") {
      alert("Pilih role terlebih dahulu!");
      return;
    } else {
      try {
        await axios.post("http://localhost:3000/api/register", formik.values, {
          withCredentials: true,
        });
        AlertComponent.success(
          "Register Berhasil!",
          "Anda akan diarahkan ke login."
        );

        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } catch (error) {
        AlertComponent.error(
          "Register Gagal!",
          error.response?.data?.message || "Terjadi kesalahan saat register."
        );
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      displayName: "",
      password: "",
      role: "",
    },
    onSubmit: registerUser,
    validationSchema: registerSchema,
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   formik.setFieldValue(name, value);
  // };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-4 bg-black">
        <h1 className="text-2xl font-bold text-white mb-4">Register</h1>
        <form onSubmit={formik.handleSubmit}>
          <FormControlInput label="username" type="text" formik={formik} />
          <FormControlInput label="displayName" type="text" formik={formik} />
          <FormControlInput label="password" type="password" formik={formik} />
          <FormControlInput
            label="role"
            type="select"
            formik={formik}
            options={["user", "admin"]}
          />
          <button
            type="submit"
            className="w-full p-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Buat Akun
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
