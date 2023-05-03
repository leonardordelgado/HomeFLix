import express from 'express';
const router = express();
import addfilme from '../validacoes/addfilme.js';
import deletaFilme from '../models/deletafilme.js'
import editaFilme from '../validacoes/editaFilme.js';

router.post("/add",(req, res)=>{
    addfilme(req,res)
});

router.post("/deleta/:id", (req,res)=>{
    deletaFilme(req,res)
})
router.post("/edita/:id",(req,res)=>{
    editaFilme(req,res)
})
export default router;