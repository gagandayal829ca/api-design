const orders = [
  {
    order: 1,
    name: "gagan",
  },
  {
    order: 2,
    name: "dayal",
  },
  {
    order: 3,
    name: "karan",
  },
  {
    order: 4,
    name: "Henry",
  },
  {
    order: 5,
    name: "Mark",
  },
];

const getAllOrders = (req, res) => {
  try {
    res.status(201).json({
      status: 201,
      orders: orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getOrderById = (req, res) => {
  const id = req.params.orderid;
  const allOrders = orders;

  const order = allOrders.find((order) => Number(order.order) === Number(id));

  try {
    if (order !== undefined) {
      res.status(201).json({
        status: "SUCCESS",
        order,
      });
    } else {
      res.status(404).json({
        status: "FAILURE",
        message: "Order not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error,
    });
  }
};

const updateOrderById = (req, res) => {
  const id = parseInt(req.params.orderid); // Ensure ID is treated as a number
  const { name } = req.body;

  console.log(`Request body: ${JSON.stringify(req.body)}`);

  const orderToUpdate = orders.find((order) => order.order === id);

  console.log(`Order to update: ${JSON.stringify(orderToUpdate)}`);
  try {
    if (orderToUpdate) {
      if (name) {
        orderToUpdate.name = name;
      } else {
        console.log("Name is undefined");
      }

      console.log(`Updated order: ${JSON.stringify(orderToUpdate)}`);
      res.status(200).json({
        status: "SUCCESS",
        order: orderToUpdate.order,
        orderName: name,
      });
    } else {
      res.status(404).json({
        status: "FAILURE",
        message: "Order not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "FAILURE",
      message: "Internal server error",
    });
  }
};
const deleteOrderById = (req, res) => {
  const id = req.params.orderid;
  console.log("id", id);
  const index = orders.indexOf((order) => order.order === Number(id));
  console.log("index", index);
  try {
    if (index !== -1) {
      orders.splice(index, 1);
      res.status(200).json({
        status: "SUCCESS",
        message: `Order with id:${id} has been delete successfully`,
        orders,
      });
    } else {
      res.status(404).json({
        status: "FAILURE",
        message: "Order not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  deleteOrderById,
  updateOrderById,
};
