"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { PrismaClient } from '@prisma/client'
//import TodoService from './todoService'
//const prisma = new PrismaClient()
const app = (0, express_1.default)();
const port = 3030;
//const serviceList = new TodoService()
//app.use(express.json())
//app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //let list = await serviceList.findAll()
    //res.status(200).json(list)
    res.send('Hello World!');
}));
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map