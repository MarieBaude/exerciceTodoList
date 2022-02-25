import { List } from '@prisma/client';
import express, { Request, Response } from 'express';
import TodoService from './service/todoService';
import { Cathegory } from '@prisma/client';
import cors from 'cors';

const app = express();
const port = 8080;

// cors est une sécuriter pour prot les requêtes malveillantes, 
// pour ne pas accepter n'importe quelle requete
app.use(cors({
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    origin: "*"
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const todoClient = new TodoService()

app.post('/category', async (req:Request, res:Response) => {
    let newcategory = req.body as Cathegory
    return res.status(200).json(await todoClient.creatCathegory(newcategory))
})

app.get('/categories',async(req:Request,res:Response)=>{
    console.log("requete dans la route /categories")
    return res.status(200).json(await todoClient.getCathegories())
})

app.get('/categories/:id',async (req:Request,res:Response) => {
    return res.status(200).json(await todoClient.findAllByCategoryId(Number(req.params.id)))
});

app.post('/',async(req:Request,res:Response)=>{
    let newlist= req.body as List
    return res.status(201).json(await todoClient.createList(newlist))
})



app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
