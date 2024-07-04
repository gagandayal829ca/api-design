const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  getOrderById,
  deleteOrderById,
  updateOrderById,
} = require("../controllers/orderController");

router.get("/", getAllOrders);

router.get("/:orderid", getOrderById);

router.patch("/:orderid", updateOrderById);

router.delete("/:orderid", deleteOrderById);
// router.post("/", postOrder);
// router.put("/:orderid", updateOrder);
// router.delete("/:orderid", deleteOrder);

module.exports = router;
