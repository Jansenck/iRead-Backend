import { Router } from "express";
//import { authenticateToken, validateBody } from "@/middlewares";
import { createText } from "@/controllers";
//import { createEnrollmentSchema } from "@/schemas";

const textRouter = Router();

textRouter
  .post("/", createText);

export { textRouter };