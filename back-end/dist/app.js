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
const todoService_1 = __importDefault(require("./service/todoService"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8080;
// cors est une sécuriter pour prot les requêtes malveillantes, 
// pour ne pas accepter n'importe quelle requete
app.use((0, cors_1.default)({
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    origin: "*"
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const todoClient = new todoService_1.default();
app.post('/category', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let newcategory = req.body;
    return res.status(200).json(yield todoClient.creatCathegory(newcategory));
}));
app.get('/categories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json(yield todoClient.getCathegories());
}));
app.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("requete dans la route list");
    return res.status(200).json(yield todoClient.findAllByCategoryId(Number(req.params.id)));
}));
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let newlist = req.body;
    console.log(newlist);
    return res.status(201).json(yield todoClient.createList(newlist));
}));
app.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json(yield todoClient.deleteList(Number(req.params.id)));
}));
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map