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

router.get("/api/products", (request, response) => {
  console.log(request.headers.cookie);
  console.log(request.cookies);
  console.log(request.signedCookies.test);
  if (request.signedCookies.test && request.signedCookies.test === "test")
    return response.send(mockProducts).status(200);
  return response.send({ message: "Unauthorized" }).status(401);
});

router.get("/api/products/:id", (request, response) => {
  const { id } = request.params;
  const product = mockProducts.find((product) => product.id === parseInt(id));
  if (!product) return response.sendStatus(404);
  response.send(product).status(200);
});

router.post(
  "/api/products",
  checkSchema(createProductValidationSchema),
  (request, response) => {
    const result = validationResult(request); //result akan true jika tidak ada data yg error
    if (!result.isEmpty())
      return response.status(400).send({ errors: result.array() });
    const data = matchedData(request);
    const newProduct = {
      id: mockProducts[mockProducts.length - 1].id + 1,
      ...data,
    };
    mockProducts.push(newProduct);
    return response.status(201).send(newProduct);
  }
);

router.put("/api/products/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;
  const product = mockProducts.findIndex(
    (product) => product.id === parseInt(id)
  );
  if (product === -1) return response.sendStatus(404);
  mockProducts[product] = { id: mockProducts[product].id, ...body };
  return response.sendStatus(200);
});

router.patch("/api/products/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;
  const product = mockProducts.findIndex(
    (product) => product.id === parseInt(id)
  );
  if (product === -1) return response.sendStatus(404);

  mockProducts[product] = { ...mockProducts[product], ...body };
  return response.sendStatus(200);
});

router.delete("/api/products/:id", (request, response) => {
  const {
    params: { id },
  } = request;
  const product = mockProducts.findIndex(
    (product) => product.id === parseInt(id)
  );
  if (product === -1) return response.sendStatus(404);
  mockProducts.splice(product, 1);
  return response.sendStatus(200);
});

export default router;
