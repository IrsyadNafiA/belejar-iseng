import { Router } from "express";
import authRouter from "./auth.mjs";
import productRouter from "./products.mjs";

const router = Router();

router.use(authRouter);
router.use(productRouter);

export default router;
