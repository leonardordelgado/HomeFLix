import express from 'express';
const router = express();

import { addfilme } from '../validacoes/addfilme.js';


router.post("/filme",(req, res)=>{
    addfilme(req,res)
});
export default router;