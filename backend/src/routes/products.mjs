import { Router } from "express";
import { mockProducts } from "../utils/constants.mjs";
import {
  body,
  validationResult,
  checkSchema,
  matchedData,
} from "express-validator";
import { createProductValidationSchema } from "../utils/validationSchemas.mjs";

const router = Router();

router.get("/api/products", (req, res) => {
  res.send(mockProducts).status(200);
});

router.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = mockProducts.find((product) => product.id === parseInt(id));
  if (!product) return res.sendStatus(404);
  res.send(product).status(200);
});

router.post(
  "/api/products",
  checkSchema(createProductValidationSchema),
  (req, res) => {
    const result = validationResult(req); //result akan true jika tidak ada data yg error
    if (!result.isEmpty())
      return res.status(400).send({ errors: result.array() });
    const data = matchedData(req);
    const newProduct = {
      id: mockProducts[mockProducts.length - 1].id + 1,
      ...data,
    };
    mockProducts.push(newProduct);
    return res.status(201).send(newProduct);
  }
);

router.put("/api/products/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const product = mockProducts.findIndex(
    (product) => product.id === parseInt(id)
  );
  if (product === -1) return res.sendStatus(404);
  mockProducts[product] = { id: mockProducts[product].id, ...body };
  return res.sendStatus(200);
});

router.patch("/api/products/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const product = mockProducts.findIndex(
    (product) => product.id === parseInt(id)
  );
  if (product === -1) return res.sendStatus(404);

  mockProducts[product] = { ...mockProducts[product], ...body };
  return res.sendStatus(200);
});

router.delete("/api/products/:id", (req, res) => {
  const {
    params: { id },
  } = req;
  const product = mockProducts.findIndex(
    (product) => product.id === parseInt(id)
  );
  if (product === -1) return res.sendStatus(404);
  mockProducts.splice(product, 1);
  return res.sendStatus(200);
});

export default router;
