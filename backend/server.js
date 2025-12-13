const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const db = require("./models/db");
const orderRoutes = require("./routes/orders");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/orders", orderRoutes);

// TEST DB
app.get("/test-db", (req, res) => {
  db.query("SHOW TABLES", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
