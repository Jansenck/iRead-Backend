import { Router } from "express";
//import { authenticateToken, validateBody } from "@/middlewares";
import { createText } from "@/controllers";
//import { createEnrollmentSchema } from "@/schemas";

const translatorRouter = Router();

translatorRouter
  .post("/", createText);

export { translatorRouter };