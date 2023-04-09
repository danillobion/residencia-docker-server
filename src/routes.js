import {Router} from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

router.post("/produto/create", async (req, res) =>{
    const {nome, categoria, preco} = req.body
    const produto = await prisma.produto.create({
        data:{nome, categoria,preco},
    });
    return res.json(produto)
})
router.get("/produto/find", async (req, res) =>{
    const {id} = req.body
    const produto = await prisma.produto.findUnique(
        {
            where: {
              id: id,
            },
          }
    );
    return res.json(produto);
})
router.get("/produto/findAll", async (req, res) =>{
    const produto = await prisma.produto.findMany();
    return res.json(produto);
})
router.delete("/produto/delete", async (req, res) =>{
    const {id} = req.body
    const produto = await prisma.produto.delete(
        {
            where: {
              id: id,
            },
          }
    );
    return res.json(produto);
})
router.put("/produto/update", async (req, res) =>{
    const {id, nome, categoria, preco} = req.body
    const produto = await prisma.produto.update({
        where: {
          id:id,
        },
        data:{nome, categoria,preco},
      })
    return res.json(produto);
})

export {router}