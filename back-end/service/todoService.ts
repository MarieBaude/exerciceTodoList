import { Cathegory, List, PrismaClient, PrismaPromise } from "@prisma/client";


export default class TodoService {
    private prismaClient: PrismaClient

    constructor(){
        this.prismaClient= new PrismaClient()
    }

    findAll =async():Promise<List[]>=> await this.prismaClient.list.findMany()

    createList=async(list:List):Promise<List>=> await this.prismaClient.list.create({data:list})

    getCathegories=async():Promise<Cathegory[]>=>{
        return await this.prismaClient.cathegory.findMany()
    }

    creatCathegory=()=>{
        let cathegoryArray=["Legumes","Fruits","Viandes","Bonbons","Patisseries"]

        cathegoryArray.map(async(item)=>{
           let cath= {name:item} as Cathegory
            await this.prismaClient.cathegory.create({data:cath})
        })
    }
}