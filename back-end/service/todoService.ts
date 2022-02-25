import { Cathegory, List, PrismaClient, PrismaPromise } from "@prisma/client";


export default class TodoService {
    private prismaClient: PrismaClient

    constructor(){
        this.prismaClient= new PrismaClient()
    }

    getCathegories=async():Promise<Cathegory[]>=>{
        return await this.prismaClient.cathegory.findMany()
    }

    findAllByCategoryId =async(idcategory:number):Promise<List[]>=> await this.prismaClient.list.findMany({
        where: {
            cathegoryId: idcategory
        }
    })

    createList=async(list:List):Promise<List>=> await this.prismaClient.list.create({data:list})

    

    creatCathegory=async(Cathegory:Cathegory)=>{
        // let cathegoryArray=["Legumes","Fruits","Viandes","Bonbons","Patisseries"]
        // cathegoryArray.map(async(item)=>{
        //    let cath= {name:item} as Cathegory
        //     await this.prismaClient.cathegory.create({data:cath})
        // })
        return await this.prismaClient.cathegory.create({data:Cathegory}) 
    }

    deleteList=async(id:number) => {
        return await this.prismaClient.list.delete({
            where: {
                id: id
            }
        })
    }
}