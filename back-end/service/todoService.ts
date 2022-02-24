import { PrismaClient } from "@prisma/client";


export default class TodoService {
    private prismaClient: PrismaClient

    constructor(){
        this.prismaClient= new PrismaClient()
    }

    findAll =async()=> await this.prismaClient.list.findMany()
}