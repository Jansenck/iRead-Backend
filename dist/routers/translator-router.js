"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translatorRouter = void 0;
const express_1 = require("express");
//import { authenticateToken, validateBody } from "@/middlewares";
const controllers_1 = require("../controllers/index");
//import { createEnrollmentSchema } from "@/schemas";
const translatorRouter = (0, express_1.Router)();
exports.translatorRouter = translatorRouter;
translatorRouter
    .post("/", controllers_1.createText);
