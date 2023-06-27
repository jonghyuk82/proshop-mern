import express from "express";
const router = express.Router();
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// FOLLOWING CODE IS FOR BEFORE CREATING productController
//
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404);
//       throw new Error("Resource not found");
//     }
//   })
// );
// UP TO HERE

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
