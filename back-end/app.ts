import { List } from '@prisma/client';
import express, { Request, Response } from 'express';
import TodoService from './service/todoService';

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const todoClient = new TodoService()

// to create cathegories for first time
// todoClient.creatCathegory()

app.get('/',async (req:Request,res:Response) => {
    return res.status(200).json(await todoClient.findAll())
});

app.post('/',async(req:Request,res:Response)=>{
    let newlist= req.body as List

    return res.status(201).json(await todoClient.createList(newlist))
})

app.get('/cathegories',async(req:Request,res:Response)=>{
    return res.status(200).json(await todoClient.getCathegories())
})




app.listen(port, () => {
  
  return console.log(`server is listening on ${port}`);
});
