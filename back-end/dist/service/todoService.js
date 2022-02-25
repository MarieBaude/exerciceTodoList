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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class TodoService {
    constructor() {
        this.getCathegories = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.cathegory.findMany();
        });
        this.findAllByCategoryId = (idcategory) => __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.list.findMany({
                where: {
                    cathegoryId: idcategory
                }
            });
        });
        this.createList = (list) => __awaiter(this, void 0, void 0, function* () { return yield this.prismaClient.list.create({ data: list }); });
        this.creatCathegory = (Cathegory) => __awaiter(this, void 0, void 0, function* () {
            // let cathegoryArray=["Legumes","Fruits","Viandes","Bonbons","Patisseries"]
            // cathegoryArray.map(async(item)=>{
            //    let cath= {name:item} as Cathegory
            //     await this.prismaClient.cathegory.create({data:cath})
            // })
            return yield this.prismaClient.cathegory.create({ data: Cathegory });
        });
        this.deleteList = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaClient.list.delete({
                where: {
                    id: id
                }
            });
        });
        this.prismaClient = new client_1.PrismaClient();
    }
}
exports.default = TodoService;
//# sourceMappingURL=todoService.js.map