import express from "express";
import { prisma } from "../db/index.js";
<<<<<<< HEAD
import passport from "passport";
const router = express.Router();

const itemValidation = "";
const options = {
  session: false,
};
// creating items
router.post(
  "/store/item",
  passport.authenticate("jwt", options),
  async (req, res) => {
    try {
      const getUserStore = await prisma.store.findFirst({
        where: {
          user_id: req.user.id,
        },
      });
      if (getUserStore) {
        try {
          const newItem = await prisma.items.create({
            data: {
              ...req.body,
              Store: {
                connect: {
                  id: getUserStore.id,
                },
              },
            },
          });

          res.status(201).json({
            success: true,
            message: "Successfully created",
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({
            success: false,
            message: "something went wrong",
          });
        }
      } else {
        res.status(404).json({
          success: false,
          message: "store not created",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
  }
);

// creating the store route
router.post(
  "/store",
  passport.authenticate("jwt", options),
  async (req, res) => {
    try {
      const foundStore = await prisma.store.findFirst({
        where: {
          user_id: req.user.id,
        },
      });
      if (foundStore) {
        res.status(409).json({
          success: false,
          message: "Already exist",
        });
      } else {
        try {
          //
          const createStore = await prisma.store.create({
            data: {
              user_id: req.user.id,
            },
          });

          res.status(201).json({
            success: true,
            message: "Successfully created",
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({
            success: false,
            message: "Something went wrong",
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
);
// edit item from the store

export default router;
=======

export default function privateRouter() {
  const router = express.Router();

//GET | One Item 
  router.get("/store/items:id", async (req, res) => {
    const allItems = await prisma.items.findMany({
      where: {
        id: req.body.id,
      },
      include: {
        name: req.body.name,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        category: req.body.category,
        rating: req.body.rating,
        store: req.body.store,
        cart: req.body.cart,
      },
    });
    res.status(200).json({
      success: true,
      items: allItems,
    });
  });
}
>>>>>>> c7e6bbf (get route added | first commit)
