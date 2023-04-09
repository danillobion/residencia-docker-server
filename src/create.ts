import { PrismaClient } from "@prisma/client";
import { disconnect } from "process";
const prisma = new PrismaClient();

async function main() {
    try {
        const data =[
            {nome : "Iphone 14", categoria:"smartphone", preco:15000},
            {nome : "Macbook Pro", categoria:"notebook", preco:27000},
            {nome : "Apple Watch", categoria:"smartwatch", preco:5000},
        ];
        const res = await prisma.produto.createMany({
            data,
            skipDuplicates:true,
        });
        console.log(res);
    } catch (err) {
        console.log(err);
    }finally{
        async() =>{
            await prisma.$disconnect();
        }
    }
}

main();