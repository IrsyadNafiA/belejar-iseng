import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.number().required("Price is required").min(1),
  image: Yup.string().required("Image is required"),
  description: Yup.string().required("Description is required"),
  type: Yup.string().required("Type is required"),
});
