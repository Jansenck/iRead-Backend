"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDB = exports.connectDb = exports.prisma = void 0;
const client_1 = require("@prisma/client");
//export const redisClient = createClient();
function connectDb() {
    exports.prisma = new client_1.PrismaClient();
    //redisClient.connect();
}
exports.connectDb = connectDb;
async function disconnectDB() {
    await exports.prisma?.$disconnect();
    //await redisClient?.disconnect();
}
exports.disconnectDB = disconnectDB;
