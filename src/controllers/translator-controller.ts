//import { AuthenticatedRequest } from "@/middlewares";
import { Response, Request } from "express";
import httpStatus from "../../node_modules/http-status/lib/index";
import textService from "@/services/translator-service";
import { textPDF } from "@/repositories/translation-repository";

export async function createText(req: Request, res: Response) {
  const postData = req.body;
  try {
    await textService.createText(postData);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}