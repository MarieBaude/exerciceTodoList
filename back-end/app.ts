import express from 'express';
import TodoService from './service/todoService';

const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const todoClient = new TodoService()

app.get('/',async (req, res) => {
    return res.status(200).json(await todoClient.findAll())
});
app.listen(port, () => {
  
  return console.log(`server is listening on ${port}`);
});
