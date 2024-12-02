import { request, response } from "express";
import { Product } from "../../model/products.mjs";
import { matchedData, validationResult } from "express-validator";

const createProduct = async (request, response) => {
  const result = validationResult(request);
  if (!result.isEmpty()) return response.status(400).send(result.array());

  const data = matchedData(request);
  if (!request.file)
    return response.status(400).send({ message: "Masukkan gambar!" });
  data.image = request.file.path;
  const newProduct = new Product(data);
  try {
    const savedProduct = await newProduct.save();
    return response.status(201).send(savedProduct);
  } catch (err) {
    return response.status(400).send({ message: "Failed to save product" });
  }
};

const getProducts = async (request, response) => {
  const products = await Product.find();
  response.send(products);
};

const getProductById = async (request, response) => {
  const product = await Product.findById(request.params.id);
  if (!product) return response.sendStatus(404);
  response.send(product);
};

const updateProduct = async (request, response) => {
  const product = await Product.findById(request.params.id);
  if (!product) return response.sendStatus(404);
  const data = matchedData(request);
  await Product.updateOne({ _id: request.params.id }, data);
  response.status(200).send(data);
};

const deleteProduct = async (request, response) => {
  const product = await Product.findById(request.params.id);
  if (!product) return response.sendStatus(404);
  await Product.deleteOne({ _id: request.params.id });
  response.sendStatus(200);
};

export {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
