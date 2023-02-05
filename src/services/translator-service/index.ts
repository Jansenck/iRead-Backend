import textsRepository from "@/repositories/translation-repository";
import { Pdf } from "@prisma/client";

async function createText(params: Pdf) {
  const postData = { userId: params.userId, text: params.text};  
  await textsRepository.saveText(postData);
}

const textService = {
    createText,
};

export default textService;
