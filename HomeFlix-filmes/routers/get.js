import express from "express";
const router = express()


router.get("/",(req,res)=>{
    res.send("Servidor em op")
})
export default router