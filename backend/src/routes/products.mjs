import { Router } from "express";
import { checkSchema } from "express-validator";
import { createProductValidationSchema } from "../utils/validationSchemas.mjs";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controller/product/product-controller.mjs";
import { isAuthenticated } from "../middleware/isAuthenticated.mjs";

const router = Router();

router.get("/api/product", getProducts);
router.get("/api/product/:id", getProductById);
router.post(
  "/api/product",
  checkSchema(createProductValidationSchema),
  createProduct
);
router.put(
  "/api/product/:id",
  isAuthenticated,
  checkSchema(createProductValidationSchema),
  updateProduct
);
router.delete("/api/product/:id", deleteProduct);

export default router;
