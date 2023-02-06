"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createText = void 0;
const index_1 = __importDefault(require("../../node_modules/http-status/lib/index"));
const translator_service_1 = __importDefault(require("../services/translator-service/index"));
async function createText(req, res) {
    const postData = req.body;
    try {
        await translator_service_1.default.createText(postData);
        return res.sendStatus(index_1.default.CREATED);
    }
    catch (error) {
        return res.sendStatus(index_1.default.INTERNAL_SERVER_ERROR);
    }
}
exports.createText = createText;
