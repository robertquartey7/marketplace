import express from "express";
import { prisma } from "../db/index.js";
import passport from "passport";
import multer from "multer";
import path from "path";
import fs from 'fs'
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, './uploads/images/',);
  },
  filename: (req, file, cd) => {
    cd(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

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
        console.log(getUserStore.id);
        try {
          const newItem = await prisma.items.create({
            data: {
              ...req.body,
              store: {
                connect: {
                  id: getUserStore.id,
                },
              },
            },
          });

          res.status(201).json({
            success: true,
            message: "Successfully created",
            data: newItem,
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

//Users can edit an item from their store

router.put(
  "/store/item/:id",
  passport.authenticate("jwt", options),
  async (req, res) => {
    try {
      const itemId = req.params.id;
      const updateItem = await prisma.items.update({
        where: {
          id: itemId,
        },
        data: {
          ...req.body,
        },
      });
      if (updateItem) {
        res.status(200).json({
          success: true,
          message: "Successfully updated",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
);

router.delete(
  "/store/item/:id",
  passport.authenticate("jwt", options),
  async (req, res) => {
    try {
      const itemId = req.params.id;
      const updateItem = await prisma.items.delete({
        where: {
          id: itemId,
        },
      });
      if (updateItem) {
        res.status(200).json({
          success: true,
          message: "Successfully deleted",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
);

// file upload with multer
router.post("/upload", upload.single("image"), (req, res) => {

  res.status(201).json({
    success: true,
    fileDestination: req.file.filename
  });
});
export default router;
