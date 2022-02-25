import { List } from '@prisma/client';
import express, { Request, Response } from 'express';
import TodoService from './service/todoService';
import { Cathegory } from '@prisma/client';

const app = express();
const port = 8080;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const todoClient = new TodoService()

app.post('/category', async (req:Request, res:Response) => {
    let newcategory = req.body as Cathegory
    return res.status(200).json(await todoClient.creatCathegory(newcategory))
})

app.get('/:id',async (req:Request,res:Response) => {
    return res.status(200).json(await todoClient.findAllByCategoryId(Number(req.params.id)))
});

app.post('/',async(req:Request,res:Response)=>{
    let newlist= req.body as List
    return res.status(201).json(await todoClient.createList(newlist))
})

app.get('/categories',async(req:Request,res:Response)=>{
    console.log("requete dans la route /categories")
    return res.status(200).json(await todoClient.getCathegories())
})

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
