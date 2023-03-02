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

//GET | One Item 
router.get("/store/items/:id",
async function (req, res) {
    try {
        const oneItem = await prisma.items.findUnique({
            where: {
                id: req.items.params.id
            }
        });
        if (oneItem) {
            res.status(200).json({
                success: true,
                message: "Item was found",
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Item doesn't exist",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
});

export default router



// router.get("/store/items:id", async (req, res) => {
//   const allItems = await prisma.items.findMany({
//     where: {
//       id: req.body.id,
//     },
//     include: {
//       name: req.body.name,
//       price: req.body.price,
//       imageUrl: req.body.imageUrl,
//       category: req.body.category,
//       rating: req.body.rating,
//       store: req.body.store,
//       cart: req.body.cart,
//     },
//   });
//   res.status(200).json({
//     success: true,
//     items: allItems,
//   });
// });
// }