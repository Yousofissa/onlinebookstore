const db = require("../models/db");

exports.createOrder = (req, res) => {
  const userId = req.userId;
  const { cartItems } = req.body;

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  // 1️⃣ Insert into orders
  db.query(
    "INSERT INTO orders (user_id, total) VALUES (?, ?)",
    [userId, total],
    (err, result) => {
      if (err) {
        console.error("Orders error:", err);
        return res.status(500).json({ message: "Order insert failed" });
      }

      const orderId = result.insertId;

      // 2️⃣ Insert order items (MATCHING TABLE)
      const values = cartItems.map(item => [
        orderId,
        item.title,
        item.price
      ]);

      db.query(
        "INSERT INTO order_items (order_id, title, price) VALUES ?",
        [values],
        (err) => {
          if (err) {
            console.error("Order items error:", err);
            return res.status(500).json({ message: "Order items insert failed" });
          }

          res.json({ message: "Order placed successfully" });
        }
      );
    }
  );
};
