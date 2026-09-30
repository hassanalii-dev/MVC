import express from "express";

import {
    getProductsController,
    saveProductController,
    updatedProductController,
    deleteProductController
} from "../controller/product.js";

const router = express.Router();

router.get("/", getProductsController);

router.post("/", saveProductController);

router.put("/:id", updatedProductController);

router.delete("/:id", deleteProductController);

export default router;