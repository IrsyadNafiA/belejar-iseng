import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const Product = mongoose.model("Product", ProductSchema);
