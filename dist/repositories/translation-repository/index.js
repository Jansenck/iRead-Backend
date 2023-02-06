"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/index");
async function saveText(postData) {
    return config_1.prisma.pdf.create({
        data: {
            userId: postData.userId,
            text: postData.text
        }
    });
}
const textsRepository = {
    saveText,
};
exports.default = textsRepository;
