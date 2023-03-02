import express from "express";
import { prisma } from "../db/index.js";

const router = express();

// getting a certain items from the store
router.get("/store/items/:query", async (req, res) => {
  try {
    const data = await prisma.items.findMany({
      where: {
        category: req.params.query,
      },
    });

    if (data) {
      res.status(200).json({
        success: true,
        data,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});




router.get("/store", async function (req, res) {
  try {
    const getStore = await prisma.store.findMany({
      include: {
        items: true,
      },
    });
    if (getStore) {
      res.status(200).json({
        success: true,
        data: getStore,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//GET | One Item
router.get("/store/items/:id", async function (req, res) {
  try {
    const data = await prisma.items.findUnique({
      where: {
        id: req.items.params.id,
      },
    });
    if (data) {
      res.status(200).json({
        success: true,
        data,
      });
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

export default router;
