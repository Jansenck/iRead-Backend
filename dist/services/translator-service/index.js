"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const translation_repository_1 = __importDefault(require("../../repositories/translation-repository/index"));
async function createText(params) {
    const postData = { userId: params.userId, text: params.text };
    await translation_repository_1.default.saveText(postData);
}
const textService = {
    createText,
};
exports.default = textService;
