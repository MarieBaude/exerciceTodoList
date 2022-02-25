import { Cathegory, List, PrismaClient, PrismaPromise } from "@prisma/client";


export default class TodoService {
    private prismaClient: PrismaClient

    constructor(){
        this.prismaClient= new PrismaClient()
    }

    findAllByCategoryId =async(idcategory:number):Promise<List[]>=> await this.prismaClient.list.findMany({
        where: {
            cathegoryId: idcategory
        }
    })

    createList=async(list:List):Promise<List>=> await this.prismaClient.list.create({data:list})

    getCathegories=async():Promise<Cathegory[]>=>{
        return await this.prismaClient.cathegory.findMany()
    }

    creatCathegory=async(Cathegory:Cathegory)=>{
        // let cathegoryArray=["Legumes","Fruits","Viandes","Bonbons","Patisseries"]
        // cathegoryArray.map(async(item)=>{
        //    let cath= {name:item} as Cathegory
        //     await this.prismaClient.cathegory.create({data:cath})
        // })
        return await this.prismaClient.cathegory.create({data:Cathegory}) 
    }
}