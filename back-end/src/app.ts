import express from 'express';
//import { PrismaClient } from '@prisma/client'
//import TodoService from './todoService'

//const prisma = new PrismaClient()
const app = express();
const port = 3030;

//const serviceList = new TodoService()

//app.use(express.json())
//app.use(express.urlencoded({extended: true}))

app.get('/', async (req, res) => {
    //let list = await serviceList.findAll()
    //res.status(200).json(list)
    res.send('Hello World!')
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});