import { useFormik } from "formik";
import { FormControlInput } from "../../../components/Form/FormControl";
import { Header3 } from "../../../components/Home/Header";
import { productSchema } from "../../../utils/validations/productValidation";
import axios from "axios";
import AlertComponent from "../../../components/SweetAlert/AlertComponent";

const Product = () => {
  const createProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", formik.values.name);
      formData.append("price", formik.values.price);
      formData.append("description", formik.values.description);
      formData.append("type", formik.values.type);
      formData.append("image", formik.values.image); // Pastikan `formik.values.image` berisi file

      await axios.post("http://localhost:3000/api/product", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      AlertComponent.success("Berhasil!", "Produk baru ditambahkan.");
      formik.resetForm();
    } catch (error) {
      AlertComponent.error(
        "Gagal!",
        error.response?.data?.message ||
          "Terjadi kesalahan saat menambahkan produk."
      );
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      type: "",
      image: null,
    },
    onSubmit: createProduct,
    validationSchema: productSchema,
  });

  return (
    <div>
      <Header3 title="Product" textColor={"text-black"} />
      <form onSubmit={formik.handleSubmit}>
        <div className="w-full flex flex-col">
          <FormControlInput label="name" type="text" formik={formik} />
          <FormControlInput label="description" type="text" formik={formik} />
          <FormControlInput label="price" type="number" formik={formik} />
          <FormControlInput label="type" type="text" formik={formik} />
          <FormControlInput label="image" type="file" formik={formik} />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Tambah
        </button>
      </form>
    </div>
  );
};

export default Product;
