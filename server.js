const express = require("express");
const orderRoutes = require("./routes/orderRoutes");
const customerRoutes = require("./routes/customerRoutes");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at PORT:${PORT}`);
});
