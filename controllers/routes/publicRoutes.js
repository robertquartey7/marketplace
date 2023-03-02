import express from 'express'
import { prisma } from '../db/index.js'

const router = express()


// getting a certain items from the store
// router.get('/store/items/:id', async (req,res)=>{
// try {
//     const getItem = await prisma.items.findMany({
//         where:{
            
//         }
//     })
// } catch (error) {
    
// }



// })

router.get("/store", async function(req, res) {
   try {
    const getStore = await prisma.store.findMany({
        include: {
            items: true
        }
    })
    if(getStore){
        res.status(200).json({
            success: true,
            data: getStore
        })
    } else { res.status(404).json({
        success: false,
        message: "Not found"
    })}
   } catch (error) { res.status(500).json({
    success: false,
    message: "Something went wrong"
})
   } 

   

   
})



export default router