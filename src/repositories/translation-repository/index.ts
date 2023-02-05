import { prisma } from "@/config";
import { Pdf } from "@prisma/client";

async function saveText(postData : textPDF) {
    return prisma.pdf.create({
        data: {
            userId: postData.userId,
            text: postData.text
        }
    });
}

export type textPDF = Omit<Pdf, "id" | "createdAt" | "updatedAt">;

const textsRepository = {
    saveText,
};

export default textsRepository;
