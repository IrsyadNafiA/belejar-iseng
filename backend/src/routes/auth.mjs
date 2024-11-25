import { Router } from "express";
import { checkSchema } from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import {
  cekLogin,
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/auth/auth-controller.mjs";
import passport from "passport";
import { isAuthenticated } from "../middleware/isAuthenticated.mjs";

const router = Router();

router.post(
  "/api/register",
  checkSchema(createUserValidationSchema),
  registerUser
);
router.post("/api/login", passport.authenticate("local"), loginUser);
router.post("/api/logout", isAuthenticated, logoutUser);
router.get("/api/cek-login", isAuthenticated, cekLogin);

export default router;
