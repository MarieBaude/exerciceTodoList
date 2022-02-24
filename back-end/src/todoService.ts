import { PrismaClient } from '@prisma/client';
//import { List } from 'postcss/lib/list';

const prisma = new PrismaClient()

// export default class TodoService { 
//     private prisma : PrismaClient

//     constructor () {
//         this.prisma = new PrismaClient()
//     }

//     findAll=async():Promise<List[]> => {
//         return await this.prisma.List.findMany()
//     }
// }